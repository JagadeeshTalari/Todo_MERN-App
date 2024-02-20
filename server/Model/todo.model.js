const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  task: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export const TodoModel = mongoose.model(todos, TodoSchema);
