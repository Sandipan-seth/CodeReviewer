import { configDotenv } from "dotenv";
import { app } from "./src/app.js";
configDotenv();


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
