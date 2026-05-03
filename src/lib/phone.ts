// Russian phone number formatting: +7 (XXX) XXX-XX-XX

export function extractDigits(input: string): string {
  let digits = input.replace(/\D/g, "");
  // Normalize leading 8 or 7 to country code 7
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7") && digits.length > 0) {
    // If user pasted without country code (e.g. 9991234567), prepend 7
    if (digits.length >= 10) digits = "7" + digits;
  }
  return digits.slice(0, 11);
}

export function formatPhone(digits: string): string {
  // digits should start with 7
  if (!digits) return "";
  const d = digits.startsWith("7") ? digits : "7" + digits;
  const rest = d.slice(1); // up to 10 digits
  let out = "+7";
  if (rest.length === 0) return out + " ";
  out += " (" + rest.slice(0, 3);
  if (rest.length < 3) return out;
  out += ") ";
  if (rest.length <= 6) return out + rest.slice(3);
  out += rest.slice(3, 6) + "-";
  if (rest.length <= 8) return out + rest.slice(6);
  out += rest.slice(6, 8) + "-" + rest.slice(8, 10);
  return out;
}

export function isValidRuPhone(digits: string): boolean {
  return digits.length === 11 && digits.startsWith("7");
}
