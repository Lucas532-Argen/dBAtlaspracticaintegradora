import mongoose from "mongoose";
const URI =
  "mongodb+srv://larmaretti:<9kcb7FpMKNCd++u>@clusterlucasarma.4j2oryz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(() => console.log("conectado a bd"))
  .catch((error) => console.log(error));