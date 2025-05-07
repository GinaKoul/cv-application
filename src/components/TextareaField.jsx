export default function TextareaField({
  id,
  label,
  value,
  handleChange,
  rows = 4,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={rows}
        name={id}
        value={value}
        onChange={handleChange}
        autoComplete="true"
      />
    </>
  );
}
