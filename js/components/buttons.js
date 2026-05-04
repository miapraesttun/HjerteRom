/**
 * buttons.js
 * Reusable button component factory functions.
 * All functions return an HTMLElement ready to insert into the DOM.
 */

/**
 * Primary action button.
 * @param {string} label
 * @param {Function} onClick
 * @param {object} [opts] – optional: { id, disabled, icon }
 * @returns {HTMLButtonElement}
 */
function createPrimaryButton(label, onClick, opts = {}) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-primary hr-btn-primary";
  if (opts.id) btn.id = opts.id;
  if (opts.disabled) btn.disabled = true;

  if (opts.icon) {
    const icon = document.createElement("i");
    icon.className = `bi ${opts.icon} me-2`;
    btn.appendChild(icon);
  }

  btn.appendChild(document.createTextNode(label));
  btn.addEventListener("click", onClick);
  return btn;
}

/**
 * Secondary / outline button.
 * @param {string} label
 * @param {Function} onClick
 * @param {object} [opts]
 * @returns {HTMLButtonElement}
 */
function createSecondaryButton(label, onClick, opts = {}) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-outline-primary hr-btn-secondary";
  if (opts.id) btn.id = opts.id;
  if (opts.disabled) btn.disabled = true;

  if (opts.icon) {
    const icon = document.createElement("i");
    icon.className = `bi ${opts.icon} me-2`;
    btn.appendChild(icon);
  }

  btn.appendChild(document.createTextNode(label));
  btn.addEventListener("click", onClick);
  return btn;
}

/**
 * Toggle chip button (for interests / priority selection).
 * @param {string} label
 * @param {string} value
 * @param {Function} onToggle – called with (value, isActive)
 * @returns {HTMLButtonElement}
 */
function createChipButton(label, value, onToggle) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-outline-secondary hr-chip";
  btn.dataset.value = value;
  btn.textContent = label;

  btn.addEventListener("click", () => {
    const isActive = btn.classList.toggle("active");
    onToggle(value, isActive);
  });

  return btn;
}

export { createPrimaryButton, createSecondaryButton, createChipButton };
