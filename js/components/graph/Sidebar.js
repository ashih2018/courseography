import React from "react";
// import Focus from "./Focus";
// import * as sidebarDivs from "./sidebar/sidebar_divs.js";
// import * as focusInfo from "./sidebar/focus_descriptions";

export default class Sidebar extends React.Component {
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
                <a href="">Focuses</a>
              </li>
            </ul>
          </nav>
          <div id="focuses">

          </div>
          <div id="graphs" />
        </div>
        
        <div id="sidebar-button">
          <img id="sidebar-icon" src="static/res/ico/sidebar.png"></img>
        </div>
      </div>
    )
  }
}

// Set focus button onclicks
// $(".focus").click((event) => {
//   var id = $(event.target).attr("id");
//   var focusDetails = $("#" + id + "-details");
//   if (graphComponent.state.highlightedNodes == focusInfo[id + "FocusList"]) {
//     graphComponent.setState({ highlightedNodes: [] });
//     focusDetails.animate({ height: "2px" }, "fast");
//   } else {
//     $(".details").css("height", "2px");
//     focusDetails.animate({ height: "128px" }, "fast");
//     focusDetails.html(focusInfo[id + "Description"]);
//     graphComponent.setState({
//       highlightedNodes: focusInfo[id + "FocusList"]
//     });
//   }
// });

// Sidebar initialization.
// TODO: move sidebar into its own React component.
//   $("#reset").click(function() {
//     graphComponent.reset();
//   });

//   $(document).ready(function() {
//     $("#nav-export").click(function() {
//       graphComponent.openExportModal();
//     });
//   });

//   $.ajax({
//     url: "graphs",
//     dataType: "json",
//     success: function(data) {
//       sidebarDivs.createGraphButtons(data);
//       $(".graph-button").click(function() {
//         var id = $(this).data("id");
//         var name = $(this).text();
//         graphComponent.getGraph(name);
//         sidebarDivs.changeFocusEnable(id);
//       });
//     },
//     error: function() {
//       throw "No graphs in database";
//     }
//   });

//   sidebarDivs.activateSidebar();
