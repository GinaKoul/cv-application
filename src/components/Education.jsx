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
import ListItem from "./ListItem.jsx";

export default function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [date, setDate] = useState(null);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [educationList, setEducationList] = useState([]);
  const [buttonState, setButtonState] = useState("add");

  // Move to List Item pass date
  const fullDate = dateFull(date?.from, date?.to);

  function handleClick(e) {
    if (buttonState === "add") {
      setEducationList([
        ...educationList,
        {
          id: crypto.randomUUID(),
          schoolName: schoolName,
          studyTitle: studyTitle,
          fullDate: fullDate,
        },
      ]);
      setButtonState("edit");
    } else if (buttonState === "edit") {
      const currentId = e.target.closest("li").getAttribute("data-id");
      const currentItem = educationList.find((item) => item.id === currentId);
      setSchoolName(currentItem.schoolName);
      setStudyTitle(currentItem.studyTitle);
      setDate();
      setCurrentItemId(currentId);

      setButtonState("submit");
    } else if (buttonState === "submit") {
      educationList.map((item) => {
        if (item.id === currentItemId) {
          return {
            id: item.id,
            schoolName: schoolName,
            studyTitle: studyTitle,
            fullDate: fullDate,
          };
        }
      });
      setButtonState("add");
    }
  }

  if (buttonState === "edit") {
    return (
      <Section title="Educational Experience" separation="true">
        <ul>
          {educationList.map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                title={item.studyTitle}
                subtitle={item.schoolName}
                date={item.fullDate}
                state="edit"
                handleClick={handleClick}
              />
            );
          })}
        </ul>
      </Section>
    );
  }

  return (
    <Fieldset title="Educational Experience">
      {/* {educationList.length > 0 && 
      <ul>
        educationList.map((item) => {
          return (
            <ListItem
            title={item.studyTitle}
            subtitle={item.schoolName}
            date={item.fullDate}
            state="edit"
          />
          )
        })
      </ul>
      } */}
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
