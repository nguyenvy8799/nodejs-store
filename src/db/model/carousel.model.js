import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: Number,
  title: String,
  url: String,
});

export const CarouselModel = mongoose.model("Carousel", schema, "carousel");
