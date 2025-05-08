import { education } from "./education.jsx";
import { work } from "./work.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import SectionMulti from "./SectionMulti.jsx";
import Button from "./Button.jsx";

export default function App() {
  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <form>
        <Button title="Print" handleClick={() => window.print()} />
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
