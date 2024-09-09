import { Router } from "express";
import { create, destroy, getAll } from "../controllers/companies.controller.js";

const router = Router();

router.get("/", getAll);

router.post("/", create);

router.delete("/:id", destroy);

export default router;
