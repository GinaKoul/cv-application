export function dateFormat(date) {
  return `${date.day}/${date.month}/${date.year}`;
}

export function dateFull(start, end) {
  return start && end ? `${dateFormat(start)} - ${dateFormat(end)}` : "";
}
