import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      requird: true,
    },
    description: {
      type: String,
      requird: true,
    },
    thumbnail: {
      id: String,
      url: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Album = mongoose.model("Album", schema);
