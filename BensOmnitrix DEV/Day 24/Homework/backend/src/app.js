import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import cors from "cors";
import { businessCardSchemas } from "../db/schemas.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


const Card = mongoose.model("Card", businessCardSchemas);

app.use(cors());
app.use(express.json());

app.get("/card/read", async (req, res) => {
  const { name } = req.query;

  const existingCardData = await Card.findOne(
    {
      name: name[0],
    }
  );

  if(existingCardData){
    res.status(200).json({
      success: true,
      data: existingCardData
    })
    return;
  }
  return res.status(404).json({
    success: false,
    data: "Data could not be found"
  })
});

app.post("/card/create", async (req, res) => {
  try {
    const { name, interests, links } = req.body;

    const newCard = new Card({
      name: name,
      interests: interests,
      links: links,
    });

    await newCard.save();

    res.status(200).json({
      success: true,
      msg: "Card added successfully",
    });
  } catch (err) {
    fs.writeFile("./error_logs.txt", err.message, (error) => {
      console.log(error);
    });
    res.status(500).json({
      success: false,
      msg: "Unable to save the card",
    });
    return;
  }
});

app.put("/card/update",async (req,res) => {
  const {name, interests, links} = req.body;

  const existingCardData = await Card.findOne({
    name: name[0],
  })

  if(!existingCardData){
    return res.status(404).json({
      success: false,
      msg: "Data is not present..Kindly make a new card"
    })
  }

  const updateData = await Card.findOneAndUpdate(
    {name: name[0]},
    {$set: {
      interests: interests,
      links: links
    }},
    {new: true}
  )

  if(updateData){
    return res.status(200).json({
      success: true,
      data: updateData
    })
  }

  res.status(404).json({
    success: false,
    msg: "Data could not be updated"
  })
  return ;

})

app.delete("/card/delete",async (req,res) => {
  const {name} = req.query;

  const deleteUser = await Card.findOneAndDelete({name: name[0]});

  if(deleteUser){
    return res.status(200).json({
      success: true,
      data: deleteUser,
      msg: "Data is deleted successfully"
    })
  }

  return res.status(404).json({
    success: false,
    msg: "Data could not be deleted"
  })

})

app.get(/.*/, (req, res) => {
  res.status(404).json({
    success: false,
    msg: "Something is up with the server",
  });
});

app.listen(PORT, function () {
  console.log(`Server is listening on ${PORT}`);
});
