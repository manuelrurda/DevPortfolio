import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// npm i clsx tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
