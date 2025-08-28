import { clsx, type ClassValue } from "clsx"

/**
 * Utility function to combine and merge CSS class names
 * 
 * This function takes multiple class value inputs and combines them into a single
 * class string using the clsx library. It provides a clean API for conditional
 * class names in React components.
 * 
 * @param inputs - Variable number of class values (strings, objects, arrays, etc.)
 * @returns Combined class string
 * 
 * @example
 * ```typescript
 * // Basic usage
 * cn('class1', 'class2') // 'class1 class2'
 * 
 * // Conditional classes
 * cn('base', { 'active': isActive, 'disabled': !isEnabled }) 
 * 
 * // With arrays
 * cn(['class1', 'class2'], { 'class3': condition })
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
