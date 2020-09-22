import React from "react";
import Focus from "./Focus";

export default class Sidebar extends React.Component {
  getFocusData() {
    const computerScienceFocusData = [
      ["sci", "Scientific Computing"],
      ["AI", "Artificial Intelligence"],
      ["NLP", "Natural Language Processing"],
      ["vision", "Computer Vision"],
      ["systems", "Computer Systems"],
      ["game", "Video Games"],
      ["HCI", "Human Computer Interaction"],
      ["theory", "Theory of Computation"],
      ["web", "Web Technologies"],
    ];
    const focusComponents = [];
    computerScienceFocusData.forEach((focus, i) => {
      focusComponents.push(
        <Focus key={i} pId={focus[0]} focusName={focus[1]} />
      )
    })
    return focusComponents;
  }

  render() {
    return (
      <div>
        <div id="sidebar">
          <div id="fce">
            <div id="fcecount">FCE Count: 0.0</div>
            <button id="reset">Reset Graph</button>
          </div>
          <nav id="sidebar-nav">
            <ul>
              <li id="graphs-nav">
                <a href="">Graphs</a>
              </li>
              <li id="focuses-nav">
                <a href="">Focuses</a>
              </li>
            </ul>
          </nav>

          <div id="focuses">
            {this.getFocusData()}
          </div>
          <div id="graphs"></div>
        </div>
        
        <div id="sidebar-button">
          <img id="sidebar-icon" src="static/res/ico/sidebar.png"></img>
        </div>
      </div>
    )
  }
}
