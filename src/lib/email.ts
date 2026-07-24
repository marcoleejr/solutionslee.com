// Email obfuscado anti-spam: se decodifica solo en el cliente.
const EMAIL_USER = "bWFyY28=";
const EMAIL_DOMAIN = "c29sdXRpb25zbGVlLmNvbQ==";

export function getEmail(): string {
  if (typeof window === "undefined") return "";
  try {
    return `${atob(EMAIL_USER)}@${atob(EMAIL_DOMAIN)}`;
  } catch {
    return "";
  }
}
