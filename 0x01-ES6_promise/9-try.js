export default function guardrail() {
  const waitlist = [];
  try {
    const value = mathFunction();
    waitlist.push(value, 'Guardrail was processed');
  } catch (e) {
    waitlist.push(`Error: ${e.message}`, 'Guardrail was processed');
  }
  return waitlist;
}
