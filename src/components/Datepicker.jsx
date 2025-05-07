import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";

export default function Datepicker({ label, value, handleChange }) {
  return (
    <>
      <label>{label}</label>
      <DtPicker
        type="range"
        initValue={value}
        placeholder="Select date range"
        onChange={handleChange}
        isRequired="true"
      />
    </>
  );
}
