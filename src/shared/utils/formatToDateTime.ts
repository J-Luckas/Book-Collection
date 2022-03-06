export function formatToDateTime(date: Date): string {
  return new Date(date).toISOString();
}
