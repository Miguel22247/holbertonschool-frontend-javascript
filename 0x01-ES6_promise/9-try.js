export default function guardrail() {
    const queue = [];
    const string = 'test';
    try {
        const value = mathFunction();
        queue.push(value, string);
    } catch (e) {
        queue.push(`Error: ${e.message}`, string);
    }
}