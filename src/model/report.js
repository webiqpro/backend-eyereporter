const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    images: {
      type: [String],
      default: [],
    },

    videos: {
      type: [String],
      default: [],
    },
    images: [
      {
        type: String,
      },
    ],
    videos: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);
