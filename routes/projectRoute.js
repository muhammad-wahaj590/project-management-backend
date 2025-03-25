import express from "express";
const router = express.Router();
import { getProjects, addProject, updateProject, deleteProject } from "../controller/projectController.js";

router.get("/projects", getProjects);
router.post("/add-project", addProject);
router.put("/update-project/:id", updateProject);
router.delete("/delete-project/:id", deleteProject);

export default router;

