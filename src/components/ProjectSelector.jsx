import React from "react";
import { v4 as uuidv4 } from "uuid";

function ProjectSelector(props) {
  function updateValue(event) {
    const { value, name } = event.target;
    console.log(name + " :: " + value);
    props.updateProject(value);
  }

  return (
    <div
      style={{ marginLeft: "00rem", width: "15rem;" }}
      class="input-group mb-3"
    >
      <label class="input-group-text" for="projects">
        Projects
      </label>
      <select
        onChange={updateValue}
        value={props.cValue}
        className="form-select"
        key={uuidv4()}
        id="projects"
        name="selector"
      >
        return
        {props.projects.map((project, index) => {
          return (
            <option key={uuidv4()} id={index} value={project.shortHand}>
              {project.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ProjectSelector;

/*

<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Options</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

*/
