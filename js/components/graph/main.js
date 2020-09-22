import React from "react";
import ReactDOM from "react-dom";
import Graph from "./Graph";
import Container from "./Container";

// The "main"
document.addEventListener("DOMContentLoaded", () => {
  renderReactContainer("container");
  renderReactGraph("react-graph");
});

export function renderReactContainer(graph_container_id) {
  return ReactDOM.render(
    <Container />,
    document.getElementById(graph_container_id)
  );
}

export function renderReactGraph(graph_container_id, start_blank, edit) {
  if (start_blank === undefined) {
    start_blank = false;
  }

  // If edit is NOT undefined, then the user is on the draw page
  if (edit === undefined) {
    edit = false;
  }

  return ReactDOM.render(
    <Graph start_blank={start_blank} edit={edit} initialDrawMode="draw-node" />,
    document.getElementById(graph_container_id)
  );
}
