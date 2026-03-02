import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * Strips all HTML tags and scripts
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [], // Strip all HTML tags
    ALLOWED_ATTR: [], // Strip all attributes
  });
}

/**
 * Sanitize HTML but allow safe formatting tags
 * Useful for email content where basic formatting is desired
 */
export function sanitizeHtmlWithFormatting(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['br', 'p', 'strong', 'em'], // Allow basic formatting
    ALLOWED_ATTR: [], // No attributes allowed
  });
}

/**
 * Escape HTML entities for safe display
 * Alternative to DOMPurify for simple text
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
