import { Router } from "express";
import { create, destroy, getAll, update } from "../controllers/questions.controller.js";

const router = Router();

router.get("/", getAll);

router.post("/", create);

router.patch("/:id", update);

router.delete("/:id", destroy);

export default router;
