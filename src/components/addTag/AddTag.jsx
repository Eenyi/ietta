import React, { useState } from "react";
import TagBubble from "../tagBubble/TagBubble";
import IettaButton from "../iettaComponents/IettaButton";
import IettaInputField from "../iettaComponents/IettaInputField";
import IettaLabel from "../iettaComponents/IettaLabel";
import "./addtag.css";
// import 'animate.css';
import { useSelector } from "react-redux";
import Fetch from "../../resources/fetch";
import apiRoutes from "../../resources/apiUrls";
import { store } from "./../../store";
import { addTags } from "../../features/project/projectSlice";

export default function AddTag({ setVisibility }) {
  const project = useSelector((state) => state.project);
  const [addedTags, setAddedTags] = useState([]);
  function editTags(e) {
    e.preventDefault();
    let tags = [];
    addedTags.tags.split(",").forEach((e) => tags.push(e.trim()));
    tags.forEach((tag, index) => tags[index] = tag.replaceAll(" ", "_"))
    tags = project.projectTags.concat(
      tags.filter((item) => project.projectTags.indexOf(item) < 0 && item !== "")
    ); // checking for Duplicates
    Fetch(
      apiRoutes.ADD_TAGS,
      "post",
      JSON.stringify({
        project: { name: project.projectName, tags: tags },
      }),
      "json"
    ).then((response) => {
      if (response?.status) {
        store.dispatch(addTags(tags));
      } else {
        //Can show the notifyToggle, or not.
      }
    });
  }
  return (
    <>
      <div className="wp-otr-tagform">
        <div className="wp-inr-tag w3-animate-zoom">
          <div className="wp-tag-form ">
            <form className="wp-tag-input" action="" onSubmit={editTags}>
              <div className="wp-inp-lbl">
                <IettaInputField
                  inputCssClass={"signUpform-input-style"}
                  inputType={"text"}
                  inputName={"tags"}
                  placeHolder={"Tags"}
                  inputValue={addedTags}
                  setFunction={setAddedTags}
                  inputId={"tags"}
                  ifRequired={"required"}
                />
                <IettaLabel
                  labelName={"comma seperated i.e [name, place, thing]"}
                  labelCssClass={"tag-label lb"}
                />
              </div>

              <IettaButton
                buttonText="Add"
                buttonCssClass={"attribute-save-btn wp-s"}
              />
            </form>
            <div className="wp-otr-avl-tags">
              <div className="wp-avl-tags">
                {project.projectTags.map((tag) => (
                  <TagBubble tag={tag} key={tag} />
                ))}
              </div>
            </div>

          </div>
          <IettaButton
            buttonText="Close"
            buttonCssClass={"attribute-save-btn"}
            buttonOnClick={setVisibility}
          />
        </div>
      </div>
    </>
  );
}
