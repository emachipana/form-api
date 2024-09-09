import express from "express";
import cors from "cors";
import companiesRoutes from "./routes/companies.routes.js";
import questionsRoutes from "./routes/questions.routes.js";
import answersRoutes from "./routes/answers.routes.js";

const app = express();

app.set("json spaces", 4);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/companies", companiesRoutes);
app.use("/api/v1/questions", questionsRoutes);
app.use("/api/v1/answers", answersRoutes);

export default app;
