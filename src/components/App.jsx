import GeneralInfo from "./GeneralInfo.jsx";
import { education } from "./education.jsx";
import { work } from "./work.jsx";
import SectionMulti from "./SectionMulti.jsx";

export default function App() {
  return (
    <form>
      <GeneralInfo />
      <SectionMulti
        sectionTitle="Educational Experience"
        fieldsetTitle="Education"
        fields={education}
      />
      <SectionMulti
        sectionTitle="Practical Experience"
        fieldsetTitle="Position details"
        fields={work}
      />
    </form>
  );
}
