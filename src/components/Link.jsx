export default function Link({ title, linkUrl, text }) {
  return (
    <p>
      {title + ": "}
      <a href={linkUrl}>{text}</a>
    </p>
  );
}
