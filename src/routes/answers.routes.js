import { Router } from "express";
import { create, destroy } from "../controllers/answers.controller.js";

const router = Router();

router.post("/", create);

router.delete("/:id", destroy);

export default router;
