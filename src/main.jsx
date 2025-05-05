import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InputField from "./components/InputField.jsx";
import Fieldset from "./components/Fieldset.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Fieldset title="General Information">
      <InputField
        id="firstName"
        label="First Name"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="lastName"
        label="Last Name"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="email"
        label="Email"
        type="email"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="tel"
        label="Phone Number"
        type="tel"
        handleChange={(e) => console.log(e.target.value)}
      />
    </Fieldset>
    <Fieldset title="Educational Experience">
      <InputField
        id="schoolName"
        label="School Name"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="studyTitle"
        label="Title of Study"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="studyDate"
        label="Date of Study"
        type="date"
        handleChange={(e) => console.log(e.target.value)}
      />
    </Fieldset>
    <Fieldset title="Practical Experience">
      <InputField
        id="companyName"
        label="Company Name"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="positionTitle"
        label="Position Title"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="mainResponsibilities"
        label="Main responsibilities of your jobs"
        type="text"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="dateFrom"
        label="Work starting date"
        type="date"
        handleChange={(e) => console.log(e.target.value)}
      />
      <InputField
        id="dateUntil"
        label="Work ending date"
        type="date"
        handleChange={(e) => console.log(e.target.value)}
      />
    </Fieldset>
  </StrictMode>
);
