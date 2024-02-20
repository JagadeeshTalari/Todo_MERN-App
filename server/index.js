const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Model/todo.model");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/get", (req, res) => {
  TodoModel.find({})
    .then((results) => res.json(results))
    .catch((err) => console.log(err.message));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task })
    .then((results) => res.status(201).json(results))
    .catch((err) => console.log(err.message));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate(
    { _id: id },
    {
      done: true,
    }
  )
    .then((results) => res.status(204).json(results))
    .catch((err) => console.log(err.message));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((results) => res.status(200).json(results))
    .catch((err) => console.log(err.message));
});

const port = 3000;

mongoose.connect("mongodb://localhost:27017/firstMERN_App");

app.listen(port, () => console.log(`Server is listening to the port: ${port}`));
