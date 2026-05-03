/**
 * Converts a PHP Carbon datetime string or an ISO string into a JavaScript Date object.
 * Handles both "YYYY-MM-DD HH:mm:ss" (Carbon) and ISO formats.
 * @param {string} dateStr - The date string to parse
 * @returns {Date|null} - JavaScript Date object or null if input is invalid
 */
export function parseCarbonOrISOToDate(dateStr) {
  if (!dateStr) return null;

  // If it's Carbon format (space but no T)
  if (dateStr.includes(" ") && !dateStr.includes("T")) {
    return new Date(dateStr.replace(" ", "T") + "Z");
  }

  // Otherwise assume ISO or other Date-parsable string
  return new Date(dateStr);
}