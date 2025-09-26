export function formatDate(input: string | number | Date): string {
  const date = input instanceof Date ? input : new Date(input);
  return date.toLocaleDateString();
}