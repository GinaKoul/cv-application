import GeneralInfo from "./GeneralInfo.jsx";
import { education } from "./education.jsx";
import { work } from "./work.jsx";
import SectionMulti from "./SectionMulti.jsx";

export default function App() {
  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
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
      <footer>
        <p>&copy; Gina Kouliaki</p>
      </footer>
    </>
  );
}
