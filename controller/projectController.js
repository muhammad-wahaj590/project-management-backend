import projectList from "../mockData.js";

// get all projects
const getProjects = (req, res) => {
    res.json(projectList);
}

// Add a new project
const addProject = (req, res) => {
    const { projectName } = req.body;
  
    // Validation: Check if projectName is provided and has more than 3 characters
    if (!projectName || projectName.trim().length <= 3) {
      return res.status(400).json({ message: "Project name must be more than 3 characters." });
    }
  
    // Create a new project object
    const newProject = { id: projectList.length + 1, projectName };
  
    // Add the new project to the projectList array
    projectList.push(newProject);
  
    // Calculate the total number of projects
    const totalProjects = projectList.length;
  
    // Return the new project and totalProjects in the response
    res.status(201).json({ newProject, totalProjects });
  };

// update Project 
const updateProject = (req, res) => {
    const { id } = req.params;
    const { projectName } = req.body;

    const project = projectList.find((project) => project.id === parseInt(id))
    if (!project) res.status(404).send('Project not found');

    project.projectName = projectName || project.projectName;
    res.json(project);
}


// Delete a project
const deleteProject = (req, res) => {
    const { id } = req.params;
  
    // Find the index of the project to delete
    const index = projectList.findIndex((project) => project.id === parseInt(id));
  
    // If project not found, return 404
    if (index === -1) {
      return res.status(404).json({ message: "Project not found" });
    }
  
    // Remove the project from the list
    projectList.splice(index, 1);
  
    // Calculate the updated total number of projects
    const totalProjects = projectList.length;
  
    // Return success response with updated totalProjects
    res.status(200).json({ message: "Project deleted successfully", totalProjects });
  };

export { getProjects, addProject, updateProject, deleteProject };