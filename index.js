require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { Posts } = require("./models");
const port = process.env.PORT || 3001;
const path = require("path");

app.use(express.json());
app.use(cors());

const db = require("./models/index");

// app.get("/posts", (req, res) => {
//   console.log("Hello World");
//   console.log("Hello World");
//   const listOfPosts = await Posts.findAll();
//   res.json(listOfPosts);
//   console.log(listOfPosts);
// });

app.get("/posts", async (req, res) => {
  try {
    console.log("Hello World");
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
    console.log(listOfPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching posts" });
  }
});

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});

// db.sequelize.sync().then(() => {
//   app.listen(port, () => {
//     console.log("Server running on port 3001");
//   });
// });
