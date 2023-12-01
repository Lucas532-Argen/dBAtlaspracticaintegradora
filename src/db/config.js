import mongoose from "mongoose";
const URI =
  "mongodb://localhost:27017/";

mongoose
  .connect(URI)
  .then(() => console.log("conectado a bd"))
  .catch((error) => console.log(error));