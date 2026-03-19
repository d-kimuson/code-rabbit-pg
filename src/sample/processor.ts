import fs from "node:fs";

// guideline violation: should be UPPER_SNAKE_CASE
const maxRetries = 3;

// guideline violation: boolean function not prefixed with is/has/can
export function valid(value: any): boolean {
  return value !== null && value !== undefined;
}

// guideline violation: using `any`, no explicit return type
export function processData(data: any) {
  const result = {};
  for (const key of Object.keys(data)) {
    (result as any)[key] = String(data[key]);
  }
  return result;
}

// guideline violation: silently swallowing error
export function safeParseJson(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

// guideline violation: synchronous file I/O in exported function
export function loadConfig(path: string) {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
}

// guideline violation: using plain object for dynamic keys instead of Map
export function countOccurrences(items: string[]) {
  const counts: Record<string, number> = {};
  for (const item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}
