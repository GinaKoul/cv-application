import "../styles/GeneralInfo.css";
import Fieldset from "./Fieldset.jsx";
import InputField from "./InputField.jsx";
import Button from "./Button.jsx";
import Section from "./Section.jsx";
import Link from "./Link.jsx";
import { useState, UseState } from "react";

export default function GeneralInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonState, setButtonState] = useState("submit");

  function handleClick() {
    setButtonState(buttonState === "submit" ? "edit" : "submit");
  }

  if (buttonState === "edit") {
    return (
      <div className="cv-top">
        <h1>{firstName + " " + lastName}</h1>
        <Section title="Contact">
          <Link title="Email" linkUrl={"mailto:" + email} text={email} />
          <Link title="Tel" linkUrl={"tel:" + phoneNumber} text={phoneNumber} />
        </Section>
        <Button title="Edit" handleClick={handleClick} />
      </div>
    );
  }

  return (
    <Fieldset title="General Information">
      <InputField
        id="firstName"
        label="First Name"
        type="text"
        value={firstName}
        handleChange={(e) => setFirstName(e.target.value)}
      />
      <InputField
        id="lastName"
        label="Last Name"
        type="text"
        value={lastName}
        handleChange={(e) => setLastName(e.target.value)}
      />
      <InputField
        id="email"
        label="Email"
        type="email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        id="tel"
        label="Phone Number"
        type="tel"
        value={phoneNumber}
        handleChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button title="Save" handleClick={handleClick} />
    </Fieldset>
  );
}
