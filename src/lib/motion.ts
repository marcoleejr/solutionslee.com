/**
 * Shared viewport config for scroll-reveal animations.
 *
 * The positive bottom rootMargin pre-triggers the reveal while the element
 * is still ~20% of the viewport below the fold, so it never sits visible
 * in its hidden state (which reads as a blank flash + jump on mobile).
 */
export const revealViewport = {
  once: true,
  margin: "0px 0px 20% 0px",
} as const;
