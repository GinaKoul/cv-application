import "../styles/Education.css";
import { useState } from "react";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { dateFull } from "./date.jsx";
import Fieldset from "./Fieldset.jsx";
import InputField from "./InputField.jsx";
import Button from "./Button.jsx";
import Section from "./Section.jsx";
import Info from "./Info.jsx";

export default function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [date, setDate] = useState(null);
  const [buttonState, setButtonState] = useState("submit");

  const fullDate = dateFull(date?.from, date?.to);

  function handleClick() {
    setButtonState(buttonState === "submit" ? "edit" : "submit");
  }

  if (buttonState === "edit") {
    return (
      <Section title="Educational Experience" separation="true">
        <Info title="School Name" text={schoolName} />
        <Info title="Title of Study" text={studyTitle} />
        <Info title="Date of Study" text={fullDate} />
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
      <DtPicker
        type="range"
        initValue={date}
        onChange={setDate}
        isRequired="true"
      />
      <Button title="Save" handleClick={handleClick} />
    </Fieldset>
  );
}
