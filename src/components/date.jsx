export function dateFormat(date) {
  return `${date.day}/${date.month}/${date.year}`;
}

function datetimeFormat(date) {
  return `${date.year}-${date.month}-${date.day}`;
}

export function dateFull(start, end, date) {
  if (!start || !end) return <span>-</span>;
  return (
    <span className="date" date={date}>
      <time dateTime={datetimeFormat(start)}>{dateFormat(start)}</time>
      {" - "}
      <time dateTime={datetimeFormat(end)}>{dateFormat(end)}</time>
    </span>
  );
}
