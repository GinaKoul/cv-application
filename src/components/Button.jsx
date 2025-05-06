export default function Button({ title, type = "button", handleClick }) {
  return (
    <button type={type} onClick={handleClick}>
      {title}
    </button>
  );
}
