import React, { useEffect, useRef } from "react";
import "./contextmenu.css";
import ContextMenuItem from "./ContextMenuItem/ContextMenuItem";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { changesMade, setCurrentPageAnnotations } from "../../features/page/pageSlice";
import { store } from "../../store";

export default function ContextMenu({ menuDetails, setMenu }) {
  let reference = useRef(null);
  useEffect(() => {
    reference.current.style.left = menuDetails.clientX.toString() + "px";
    reference.current.style.top = menuDetails.clientY.toString() + "px";
    reference.current.style.display = menuDetails.isDisplayed ? "flex" : "none";
  });
  const fileContentTags = useSelector(
    (state) => state?.page?.currentPageAnnotations
  );
  const fileContent = useSelector(
    (state) => state?.page?.currentPageContent
  );
  const indexFinder = () => {
    //Hey Future Huzaifa good luck understanding this. If you still wants to then contact me ~Talha
    let clickedWord = fileContent?.[menuDetails?.lineNumber].split(" ")?.[menuDetails?.wordNumber]
    let tokens = menuDetails?.text?.split(" ")
    let index = tokens?.findIndex(el => el === clickedWord);
    let startingIndex = menuDetails?.wordNumber - index;
    let endingIndex = startingIndex + (tokens?.length - 1)
    return [startingIndex, endingIndex];
  }
  const onItemClick = (tag) => {
    const [initial, final] = indexFinder();
    let newAnnotatedLine = [
      ...fileContentTags?.[menuDetails.lineNumber]?.split(" "),
    ];
    if (menuDetails?.text?.indexOf(" ") !== -1) {
      for (let i = initial; i <= final; i++) {
        newAnnotatedLine[i] = tag !== "Remove" ? `I-${tag}` : "O";
      }
      if (tag !== "Remove") {
        newAnnotatedLine[initial] = `B-${tag}`;
        newAnnotatedLine[final] = `E-${tag}`;
      }
      else {
        newAnnotatedLine[initial] = `O`;
        newAnnotatedLine[final] = `O`;
      }
    }
    else {
      newAnnotatedLine[menuDetails?.wordNumber] = tag !== "Remove" ? `S-${tag}` : "O";
    }
    // If the selected tag is Other then O will be placed in file else what ever the tag was will be placed.
    let newAnnotatedArray = [...fileContentTags];
    newAnnotatedArray[menuDetails.lineNumber] = newAnnotatedLine.join(" ");
    store.dispatch(setCurrentPageAnnotations(newAnnotatedArray));
    setMenu({ ...menuDetails, isDisplayed: false });
    store.dispatch(changesMade(true))
  };

  return (
    <>
      <div className="menu w3-animate-zoom" ref={reference}>
        <span className="main-text">{menuDetails.text}</span>
        <hr className="hr-menu w3-animate-left" />
        <div className="wp-inr-menu">
          {menuDetails.tags.map((tag) => (
            <ContextMenuItem
              itemName={tag.replaceAll("_", " ")}
              key={uuidv4()}
              onclick={() => onItemClick(tag)}
            />
          ))}
          <hr className="hr-menu w3-animate-left" />

          <ContextMenuItem
            itemName="Remove"
            key={uuidv4()}
            onclick={() => onItemClick("Remove")}
          // This extra ContextMenuItem is here so that we always have Other tag in Menu.
          // This also serves the purpose of removing the tag from entity
          />
        </div>
      </div>
    </>
  );
}
