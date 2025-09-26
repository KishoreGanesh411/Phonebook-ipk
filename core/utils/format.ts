export function formatPhone(value?: string): string {
  if (!value) return "No phone";
  const digits = value.replace(/[^\d]/g, "");
  if (digits.length < 10) return value;
  const [, area, prefix, line] = digits.match(/(\d{3})(\d{3})(\d{4})/) ?? [];
  if (!area) return value;
  return `(${area}) ${prefix}-${line}`;
}