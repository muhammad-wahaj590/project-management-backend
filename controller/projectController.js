import projectList from "../mockData.js";

// Helper function to find project by ID
const findProjectById = (id) => {
  const project = projectList.find(p => p.id === parseInt(id));
  if (!project) throw new Error('Project not found');
  return project;
};

// Get all projects
const getProjects = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: projectList,
      count: projectList.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Add a new project
const addProject = (req, res) => {
  try {
    const { projectName } = req.body;

    if (!projectName || projectName.trim().length <= 3) {
      return res.status(400).json({ 
        success: false,
        error: "Project name must be more than 3 characters." 
      });
    }

    const newProject = { 
      id: projectList.length + 1, 
      projectName: projectName.trim() 
    };

    projectList.push(newProject);

    res.status(201).json({
      success: true,
      data: newProject,
      count: projectList.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update project
const updateProject = (req, res) => {
  try {
    const { id } = req.params;
    const { projectName } = req.body;

    if (!projectName || projectName.trim().length <= 3) {
      return res.status(400).json({ 
        success: false,
        error: "Project name must be more than 3 characters." 
      });
    }

    const project = findProjectById(id);
    project.projectName = projectName.trim();

    res.status(200).json({
      success: true,
      data: project,
      count: projectList.length
    });
  } catch (error) {
    const status = error.message === 'Project not found' ? 404 : 500;
    res.status(status).json({
      success: false,
      error: error.message
    });
  }
};

// Delete project
const deleteProject = (req, res) => {
  try {
    const { id } = req.params;
    const projectIndex = projectList.findIndex(p => p.id === parseInt(id));
    
    if (projectIndex === -1) {
      throw new Error('Project not found');
    }

    projectList.splice(projectIndex, 1);

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully',
      count: projectList.length
    });
  } catch (error) {
    const status = error.message === 'Project not found' ? 404 : 500;
    res.status(status).json({
      success: false,
      error: error.message
    });
  }
};

export { getProjects, addProject, updateProject, deleteProject };