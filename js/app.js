/**
 * app.js
 * Entry point: bootstraps the application and handles client-side routing.
 */

import { getState } from "./state.js";

/**
 * Determine the correct starting page based on saved state.
 * Called once the DOM is ready on index.html.
 */
function init() {
  const state = getState();

  if (!state.onboardingComplete) {
    navigateTo("pages/onboarding.html");
  } else {
    navigateTo("pages/home.html");
  }
}

/**
 * Simple client-side navigation helper.
 * @param {string} path – relative path from the project root
 */
function navigateTo(path) {
  window.location.href = path;
}

document.addEventListener("DOMContentLoaded", init);

export { navigateTo };
