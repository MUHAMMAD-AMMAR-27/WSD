/**
 * text_utils.js
 * A collection of common text utility functions.
 */

/**
 * Capitalize
 * Converts the first letter of every word to uppercase.
 * Example: "hello world" -> "Hello World"
 */
export function capitalize(str, defaultValue='') {
  if (!str) return defaultValue;
  return str
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * ucfirst (Uppercase First Character)
 * Converts only the first character of the string to uppercase.
 * Example: "hello world" -> "Hello world"
 */
export function ucfirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * lcfirst (Lowercase First Character)
 * Converts only the first character of the string to lowercase.
 * Example: "Hello World" -> "hello World"
 */
export function lcfirst(str) {
  if (!str) return "";
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * toCamelCase
 * Converts a string to camelCase.
 * Example: "hello world test" -> "helloWorldTest"
 */
export function toCamelCase(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(/[\s-_]+/)
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join("");
}

/**
 * toSnakeCase
 * Converts a string to snake_case.
 * Example: "Hello World Test" -> "hello_world_test"
 */
export function toSnakeCase(str) {
  if (!str) return "";
  return str.toLowerCase().replace(/\s+/g, "_");
}

/**
 * toKebabCase
 * Converts a string to kebab-case.
 * Example: "Hello World Test" -> "hello-world-test"
 */
export function toKebabCase(str) {
  if (!str) return "";
  return str.toLowerCase().replace(/\s+/g, "-");
}

/**
 * reverseString
 * Reverses the given string.
 * Example: "hello" -> "olleh"
 */
export function reverseString(str) {
  if (!str) return "";
  return str.split("").reverse().join("");
}

/**
 * truncate
 * Shortens a string and adds "..." if it exceeds max length.
 * Example: truncate("Hello World", 5) -> "Hello..."
 */
export function truncate(str, maxLength) {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

/**
 * removeExtraSpaces
 * Removes extra spaces between words.
 * Example: "hello   world" -> "hello world"
 */
export function removeExtraSpaces(str) {
  if (!str) return "";
  return str.trim().replace(/\s+/g, " ");
}

/**
 * isPalindrome
 * Checks if a string is a palindrome.
 * Example: "madam" -> true
 */
export function isPalindrome(str) {
  if (!str) return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
