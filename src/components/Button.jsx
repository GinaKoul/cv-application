export default function Button({
  title,
  type = "button",
  datatype,
  handleClick,
}) {
  return (
    <button type={type} data-type={datatype} onClick={handleClick}>
      {title}
    </button>
  );
}
