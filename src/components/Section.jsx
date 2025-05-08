export default function Section({ title, separation = false, children }) {
  return (
    <section>
      <h3>{title}</h3>
      {separation && <hr />}
      {children}
    </section>
  );
}
