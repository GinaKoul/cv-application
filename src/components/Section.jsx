export default function Section({ title, separation = false, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {separation && <hr />}
      {children}
    </section>
  );
}
