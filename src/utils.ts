/**
 * Utility functions for common operations
 */

export function sum(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

export function average(numbers: number[]): number {
  return sum(numbers) / numbers.length;
}

export function findMax(numbers: number[]): number {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

export function removeDuplicates(arr: any[]): any[] {
  const result: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return year + "-" + month + "-" + day;
}

export function deepClone(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

export function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000,
): Promise<T> {
  return fn().catch((err) => {
    if (maxRetries <= 0) throw err;
    return sleep(delay).then(() => retry(fn, maxRetries - 1, delay));
  });
}
