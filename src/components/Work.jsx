import Fieldset from "./Fieldset.jsx";
import InputField from "./InputField.jsx";
import TextareaField from "./TextareaField.jsx";
import Button from "./Button.jsx";
import Section from "./Section.jsx";
import Info from "./Info.jsx";
import { useState, UseState } from "react";

export default function Work() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [workUntil, setWorkUntil] = useState("");
  const [buttonState, setButtonState] = useState("submit");

  function handleClick() {
    setButtonState(buttonState === "submit" ? "edit" : "submit");
  }

  if (buttonState === "edit") {
    return (
        <Section title="Practical Experience">
        <Info title="Company Name" text={companyName} />
        <Info title="Position Title" text={positionTitle} />
        <Info
          title="Main responsibilities of your jobs"
          text={mainResponsibilities}
        />
        <Info title="Work starting date" text={workFrom} />
        <Info title="Work ending date" text={workUntil} />
        <Button title="Edit" handleClick={handleClick} />
      </Section>
    )
  }

  return (
    <Fieldset title="Practical Experience">
      <InputField
        id="companyName"
        label="Company Name"
        type="text"
        value={companyName}
        handleChange={(e) => setCompanyName(e.target.value)}
      />
      <InputField
        id="positionTitle"
        label="Position Title"
        type="text"
        value={positionTitle}
        handleChange={(e) => setPositionTitle(e.target.value)}
      />
      <TextareaField
        id="mainResponsibilities"
        label="Main responsibilities of your jobs"
        value={mainResponsibilities}
        handleChange={(e) => setMainResponsibilities(e.target.value)}
      />
      <InputField
        id="workFrom"
        label="Work starting date"
        type="date"
        value={workFrom}
        handleChange={(e) => setWorkFrom(e.target.value)}
      />
      <InputField
        id="workUntil"
        label="Work ending date"
        type="date"
        value={workUntil}
        handleChange={(e) => setWorkUntil(e.target.value)}
      />
        <Button title="Save" handleClick={handleClick} />
    </Fieldset>
  );
}
