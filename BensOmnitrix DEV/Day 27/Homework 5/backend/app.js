const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const token = process.env.GITHUB_KEY;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/user", async (req, res) => {
  const { username } = req.query;
  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
    },
  });

  const userData = await response.json();

  const languages = {};

  const languages_response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  const languageData = await languages_response.json();

  await Promise.all(
    languageData.map(async ({ languages_url }) => {
      const response = await fetch(languages_url, {
        method: "GET",
        headers: {
          Authorization: `token ${token}`,
        },
      });
      const data = await response.json();

      Object.keys(data).forEach((key) => {
        languages[key] = (languages[key] || 0) + 1;
      });
    })
  );

  
  const starredResponse = await fetch(
      `https://api.github.com/users/${username}/starred`,
      {
          method: "GET",
          headers: {
              Authorization: `token ${token}`,
            },
        }
    )
    
    const starredData = await starredResponse.json();
    const starred = starredData.length;

  res.status(200).json({
    success: true,
    msg: {
      username: userData["login"],
      public_repos: userData["public_repos"],
      public_gists: userData["public_gists"],
      followers: userData["followers"],
      following: userData["following"],
      location: userData["location"],
      name: userData["name"],
      starred: starred,
      languages: languages,
      avatar: userData["avatar_url"]
    },
  });
});

app.listen(PORT, function () {
  console.log(`Server is listening on ${PORT}`);
});
