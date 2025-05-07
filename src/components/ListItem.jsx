import { dateFull } from "./date.jsx";
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
  const fullDate = dateFull(date?.from, date?.to);

  return (
    <li data-id={id}>
      <h3>{title}</h3>
      <p className="subtitle">
        <i>{subtitle}</i> [{fullDate}]
      </p>
      {text !== "" && <p>{text}</p>}
      {!state && (
        <Button title="Edit" datatype="edit" handleClick={handleClick} />
      )}
    </li>
  );
}
