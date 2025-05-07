export default function InputField({ id, label, type, value, handleChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={handleChange}
        autoComplete="true"
      />
    </>
  );
}
