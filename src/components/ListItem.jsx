import { dateFull } from "./date.jsx";
import Button from "./Button.jsx";

export default function ListItem({
  id,
  title,
  subtitle,
  date,
  text,
  state,
  handleEdit,
  handleDelete,
}) {
  const fullDate = dateFull(date?.from, date?.to);

  return (
    <li data-id={id}>
      <h4>{title}</h4>
      <p className="subtitle">
        <i>{subtitle}</i> [{fullDate}]
      </p>
      {text !== "" && <p>{text}</p>}
      {!state && (
        <>
          <Button title="Edit" handleClick={handleEdit} />
          <Button title="Delete" handleClick={handleDelete} />
        </>
      )}
    </li>
  );
}
