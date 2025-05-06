import { useState } from "react";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { dateFull } from "./date.jsx";
import Fieldset from "./Fieldset.jsx";
import InputField from "./InputField.jsx";
import TextareaField from "./TextareaField.jsx";
import Button from "./Button.jsx";
import Section from "./Section.jsx";
import Info from "./Info.jsx";

export default function Work() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [date, setDate] = useState(null);
  const [buttonState, setButtonState] = useState("submit");

  const fullDate = dateFull(date?.from, date?.to);

  function handleClick() {
    setButtonState(buttonState === "submit" ? "edit" : "submit");
  }

  if (buttonState === "edit") {
    return (
      <Section title="Practical Experience" separation="true">
        <Info title="Company Name" text={companyName} />
        <Info title="Position Title" text={positionTitle} />
        <Info
          title="Main responsibilities of your jobs"
          text={mainResponsibilities}
        />
        <Info title="Work from - until" text={fullDate} />
        <Button title="Edit" handleClick={handleClick} />
      </Section>
    );
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
