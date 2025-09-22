import React, { useEffect, useRef } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import github from "./assets/github.jpeg";
import image from "./assets/image.jpg";
import {
  avatarAtom,
  followersAtom,
  followingAtom,
  languagesAtom,
  locationAtom,
  nameAtom,
  publicGistsAtom,
  publicReposAtom,
  starredAtom,
  usernameAtom,
} from "../store/atoms/username.jsx";

function App() {
  return (
    <>
      <RecoilRoot>
        <InputComponent />
        <CardWrapper>
          <CardComponent />
        </CardWrapper>
      </RecoilRoot>
    </>
  );
}

function CardComponent() {
  const username = useRecoilValue(usernameAtom);
  const [publicGists, setPublicGists] = useRecoilState(publicGistsAtom);
  const [publicRepos, setPublicRepos] = useRecoilState(publicReposAtom);
  const [followers, setFollowers] = useRecoilState(followersAtom);
  const [following, setFollowing] = useRecoilState(followingAtom);
  const [location, setLocation] = useRecoilState(locationAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [starred, setStarred] = useRecoilState(starredAtom);
  const [languages, setLanguages] = useRecoilState(languagesAtom);
  const [avatar,setAvatar] = useRecoilState(avatarAtom);

  useEffect(() => {
    fetch(`http://localhost:3000/user?username=${username}`, {
      method: "GET"
    }).then(async (response) => {
      const data = await response.json();
      console.log(data);
      setPublicGists(data["msg"]["public_gists"]);
      setPublicRepos(data["msg"]["public_repos"]);
      setFollowers(data["msg"]["followers"]);
      setFollowing(data["msg"]["following"]);
      setLocation(data["msg"]["location"]);
      setName(data["msg"]["name"]);
      setStarred(data["msg"]["starred"]);
      setLanguages(data["msg"]["languages"]);
      setAvatar(data["msg"]["avatar"]);
    });
  }, [username]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 0",
          fontSize: "30px",
        }}
      >
        @
        <a
          href={`https://github.com/${username}`}
          style={{
            color: "#2596be",
            fontWeight: "bold",
          }}
        >
          {username}
        </a>
        &nbsp;on Github <img src={github} alt="Github Image" height={"30px"} />
      </div>
      <div
        style={{
          backgroundColor: "#2596be",
          width: "100%",
          height: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "12px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "15px",
            }}
          >
            {publicRepos} Public Repos
          </div>
          <div
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "15px",
            }}
          >
            |
          </div>
          <div
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "15px",
            }}
          >
            {publicGists} Public Gists
          </div>
        </div>
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            Top Languages
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {Object.entries(languages).map(([key, value]) => {
              return <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {key}
              </div>
              <div>{value} {value > 1 ? "Repos": "Repo"}</div>
            </div>
            })}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                CSS
              </div>
              <div>6 Repos</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                JavaScript
              </div>
              <div>17 Repos</div>
            </div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                HTML
              </div>
              <div>1 Repo</div>
            </div> */}
          </div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              &nbsp;
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                15
              </span>
              &nbsp;open issues
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              &nbsp;
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                10
              </span>
              &nbsp;watchers
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              Starred&nbsp;
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {starred}
              </span>
              &nbsp;times
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              Followed by&nbsp;
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {followers}
              </span>
              &nbsp;members
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              Following&nbsp;
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {following}
              </span>
              &nbsp;members
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            height: "180px",
            width: "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "30%",
              backgroundImage: `url(${avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              marginLeft: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {name}
            </div>
            <div>{location}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function InputComponent() {
  const setUsername = useSetRecoilState(usernameAtom);
  const timeoutRef = useRef();

  return (
    <div
      onChange={(e) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setUsername(e.target.value);
        }, 2000);
      }}
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          height: "25px",
          width: "100px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Username"
          style={{
            paddingLeft: "10px",
            aspectRatio: "1/1",
            height: "100%",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "1.5px",
          marginLeft: "90px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          padding: "5px 20px",
          cursor: "pointer",
        }}
      >
        Generate
      </div>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <>
      <div
        style={{
          position: "relative",
          margin: "auto",
          marginTop: "150px",
          height: "700px",
          width: "600px",
          borderRadius: "10px",
          border: "2px solid black",
          boxShadow: "0.7px 0.7px 5px black",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default App;
