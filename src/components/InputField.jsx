export default function InputField({ id, label, type, handleChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <br/>
      <input id={id} type={type} onClick={handleChange} />
      <br />
    </>
  );
}
