import "../styles/Education.css";
import Fieldset from "./Fieldset.jsx";
import InputField from "./InputField.jsx";
import Button from "./Button.jsx";
import Section from "./Section.jsx";
import Info from "./Info.jsx";
import { useState, UseState } from "react";

export default function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [buttonState, setButtonState] = useState("submit");

  function handleClick() {
    setButtonState(buttonState === "submit" ? "edit" : "submit");
  }

  if (buttonState === "edit") {
    return (
      <Section title="Educational Experience" separation="true">
        <Info title="School Name" text={schoolName} />
        <Info title="Title of Study" text={studyTitle} />
        <Info title="Date of Study" text={studyDate} />
        <Button title="Edit" handleClick={handleClick} />
      </Section>
    );
  }

  return (
    <Fieldset title="Educational Experience">
      <InputField
        id="schoolName"
        label="School Name"
        type="text"
        value={schoolName}
        handleChange={(e) => setSchoolName(e.target.value)}
      />
      <InputField
        id="studyTitle"
        label="Title of Study"
        type="text"
        value={studyTitle}
        handleChange={(e) => setStudyTitle(e.target.value)}
      />
      <InputField
        id="studyDate"
        label="Date of Study"
        type="date"
        value={studyDate}
        handleChange={(e) => setStudyDate(e.target.value)}
      />
      <Button title="Save" handleClick={handleClick} />
    </Fieldset>
  );
}
