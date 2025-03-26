import express from "express";
const router = express.Router();
import { 
  getProjects, 
  addProject, 
  updateProject, 
  deleteProject 
} from "../controller/projectController.js";

// GET /api/projects
router.get("/projects", getProjects);

// POST /api/projects
router.post("/projects", addProject);

// PUT /api/projects/:id
router.put("/projects/:id", updateProject);

// DELETE /api/projects/:id
router.delete("/projects/:id", deleteProject);

export default router;