import React, { useState } from "react";
import Cover from "./components/Cover";
import { Projects } from "./portfolioData";
import ProjectSelector from "./components/ProjectSelector";
import ButtonSet from "./components/drumMachine/ButtonSet";

function App() {

  const [projectId, setProjectId] = useState("covers");

  function updateProject(projectId) {
    setProjectId(projectId)
  }

  function renderWhat() {
    console.log(projectId);
    switch (projectId) {
      case "covers":
        console.log("cover triggered");
        return(<Cover/>);
      case "drumMachine":
        console.log("cover triggered");
        return(<ButtonSet/>);
      default:
        break;
    }
  }

  return (
    <div>
      <ProjectSelector projects={Projects} cValue={projectId} updateProject={updateProject}/>
      {renderWhat()}
    </div>
  );
}

export default App;
