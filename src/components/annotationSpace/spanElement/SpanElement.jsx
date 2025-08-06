import React from "react";
import "./spanelement.css";
import { useSelector } from "react-redux";
import { colors } from "../../../resources/constants";

export default function SpanElement({
  text,
  setMenu,
  isSup,
  indexOfSup,
  wordIndex,
  lineIndex,
  IOB
}) {
  const project = useSelector((state) => state.project);
  function displayMenu(e) {
    e.preventDefault();
    setMenu({
      clientX: window.event.pageX,
      clientY:
        window.event.pageY + 220 > window.innerHeight
          ? window.innerHeight - 250
          : window.event.pageY,
      text: window.getSelection().toString()
        ? window.getSelection().toString()
        : text,
      tags: project.projectTags,
      isDisplayed: true,
      lineNumber: lineIndex,
      wordNumber: wordIndex,
    });
  }
  const displayHead = () => {
    return isSup && (IOB?.letter === "B" || IOB?.letter === "S");
  }
  //console.log(IOB.className)
  return (
    <>
      {displayHead() && <sup className="wp-spn-outer" style={{
        backgroundColor: colors[indexOfSup % 7],
        borderRadius: ".3rem 0rem 0rem 0.3rem",
        padding: "2px",
        transition: "0.5s"
      }}>
        {project?.projectTags[indexOfSup]?.replaceAll("_", " ")}
      </sup>}
      <span
        className="wp-spn-outer"
        onContextMenu={displayMenu}
        style={IOB?.className}
      >
        {text}
      </span>
      <span> </span>
    </>
  );
}
