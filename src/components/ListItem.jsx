// import { useState } from "react";
import Button from "./Button.jsx";

export default function ListItem({
  id,
  title,
  subtitle,
  date,
  text,
  state,
  handleClick,
}) {
  return (
    <li dataId={id}>
      <h3>{title}</h3>
      <p className="subtitle">
        <i>{subtitle}</i> [{date}]
      </p>
      {text && <p>text</p>}
      {state === "edit" && <Button title="Edit" handleClick={handleClick} />}
    </li>
  );
}
