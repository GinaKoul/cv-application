import "../styles/SectionMulti.css";
import { useState } from "react";
import Fieldset from "./Fieldset.jsx";
import InputField from "./InputField.jsx";
import TextareaField from "./TextareaField.jsx";
import Datepicker from "./Datepicker.jsx";
import Button from "./Button.jsx";
import Section from "./Section.jsx";
import { ListItem } from "./ListItem.jsx";

export default function SectionMulti({ sectionTitle, fieldsetTitle, fields }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState(null);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [currentItemId, setCurrentItemId] = useState(null);
  const [currentState, setCurrentState] = useState("add");

  function getFieldValues(value) {
    if (value === "title") {
      return [title, (e) => setTitle(e.target.value)];
    } else if (value === "subtitle") {
      return [subtitle, (e) => setSubtitle(e.target.value)];
    }
  }
  function handleSubmit() {
    if (currentState === "add") {
      setList([
        ...list,
        {
          id: crypto.randomUUID(),
          title: title,
          subtitle: subtitle,
          date: date,
        },
      ]);
    } else if (currentState === "edit") {
      setList(
        list.map((item) => {
          if (item.id !== currentItemId) return item;
          return {
            id: item.id,
            title: title,
            subtitle: subtitle,
            date: date,
          };
        })
      );
    }
    setTitle("");
    setSubtitle("");
    setDate("");
    setCurrentItemId(null);
    setCurrentState(null);
  }

  function handleAdd() {
    setCurrentState("add");
  }

  function handleDelete(e) {
    const currentId = e.target.closest("li").getAttribute("data-id");
    setList(list.filter((item) => item.id !== currentId));
  }

  function handleEdit(e) {
    const currentId = e.target.closest("li").getAttribute("data-id");
    const currentItem = list.find((item) => item.id === currentId);
    setTitle(currentItem.title);
    setSubtitle(currentItem.subtitle);
    setDate(currentItem.date);
    setCurrentItemId(currentId);
    setCurrentState("edit");
  }
  return (
    <Section title={sectionTitle} separation="true">
      <ul className="cv-list">
        {list.map((item) => {
          if (currentState === "add" || item?.id !== currentItemId) {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                text={text}
                state={currentState}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          }
        })}
      </ul>
      {!currentState && <Button title="Add" handleClick={handleAdd} />}
      {currentState && (
        <Fieldset title={fieldsetTitle}>
          {fields.map((field) => {
            if (field.type === "range") {
              return (
                <Datepicker
                  key={field.id}
                  label={field.label}
                  value={date}
                  handleChange={setDate}
                />
              );
            } else if (field.value === "text") {
              return (
                <TextareaField
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  value={text}
                  handleChange={(e) => setText(e.target.value)}
                />
              );
            } else {
              const [value, handleChange] = getFieldValues(field.value);
              return (
                <InputField
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  type={field.text}
                  value={value}
                  handleChange={handleChange}
                />
              );
            }
          })}
          <Button title="Save" handleClick={handleSubmit} />
        </Fieldset>
      )}
    </Section>
  );
}
