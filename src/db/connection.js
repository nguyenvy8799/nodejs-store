import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://user1:9876543210@cluster0.ozoiu4o.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0&authSource=db1&authMechanism=SCRAM-SHA-1";

export const connectMongoDB = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      // Duoc goi khi ket noi thanh cong
      console.log("Connected to MongoDB!");
    })
    .catch((err) => {
      // Duoc
      console.error("Failed to connect to MongoDB: ", err);
    });
};
