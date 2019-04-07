export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
export const lerp = (start: number, end: number, amount: number) => (1-amount)*start+amount*end
