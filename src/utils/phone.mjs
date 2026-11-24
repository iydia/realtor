export function formatPhoneNumber(value = '') {
  const phone = value.trim();
  if (!phone || !/^\+?[\d\s().-]+$/.test(phone)) return phone;

  const digits = phone.replace(/\D/g, '');
  const hasCountryCode = digits.length === 11 && digits.startsWith('1');
  if (phone.startsWith('+') && !hasCountryCode) return phone;

  const national = hasCountryCode ? digits.slice(1) : digits;
  if (national.length !== 10) return phone;

  return `+1 (${national.slice(0, 3)})-${national.slice(3, 6)}-${national.slice(6)}`;
}
