const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  startdate: {
    type: Date,
    default: Date.now,
  },
  endingdate: {
    type: Date,
  },
  status: {
    type: String,
  },
  giturl: {
    type: String,
    required: true,
  },
  tags: [
    {
      tag: {
        type: String,
      },
    },
  ],
  tasks: [
    {
      heading: {
        type: String,
      },
      startdate: {
        type: Date,
        default: Date.now,
      },
      endingdate: {
        type: Date,
      },
      status: {
        type: String,
      },
      remarks: {
        type: String,
        required: true,
      },
    },
  ],
  bugs: [
    {
      heading: {
        type: String,
      },
      subheading: {
        type: String,
      },
      category: {
        type: String,
      },
      startdate: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
      },
      remarks: {
        type: String,
        required: true,
      },
    },
  ],
});
//export projectschema to model
module.exports = mongoose.model("project", ProjectSchema);
