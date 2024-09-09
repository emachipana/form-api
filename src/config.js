import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGO_DB_URI;
export const PORT = process.env.PORT;
