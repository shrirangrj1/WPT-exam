const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMessage, selectMessage } = require("./user");

app.get("/Users", async (req, res) => {
  const list = await selectMessage();
  res.json(list);
});

app.post("/add-users", async (req, res) => {
  const user = req.body;
  await addMessage(user);
  res.json({ message: "message added" });
});

app.listen(4000, () => console.log("successful"));