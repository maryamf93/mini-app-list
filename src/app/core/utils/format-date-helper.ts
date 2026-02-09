export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // use 24-hour format; remove if you want AM/PM
  });
}
