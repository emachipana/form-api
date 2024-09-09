import app from "./app.js";
import { PORT } from "./config.js";
import "./database/index.js";

app.listen(PORT);
console.log("Server is running on port: ", PORT);
