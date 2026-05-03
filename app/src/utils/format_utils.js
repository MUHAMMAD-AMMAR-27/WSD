export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date); // Results in: 29 Jan 2026
};

export function extractNameInitials(name) {
  if (!name) return "N/A";

  const words = name.trim().split(/\s+/);

  // Single-word name → first 2 characters
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  // Multi-word name → first letter of first 2 words
  return words
    .slice(0, 2)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}
