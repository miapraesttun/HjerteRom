/**
 * filters.js
 * Filter and sort component factory functions.
 */

/**
 * Build a filter bar that triggers a callback whenever a filter changes.
 *
 * @param {object} config
 * @param {object[]} config.filters – [{ label, key, options: [{label, value}] }]
 * @param {Function} config.onChange – called with a filters object { key: value, … }
 * @returns {HTMLElement}
 */
function createFilterBar({ filters = [], onChange }) {
  const current = {};

  const bar = document.createElement("div");
  bar.className = "d-flex flex-wrap gap-2 align-items-end mb-3 hr-filter-bar";

  filters.forEach(({ label, key, options }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "d-flex flex-column";

    const lbl = document.createElement("label");
    lbl.className = "form-label small mb-1";
    lbl.textContent = label;

    const select = document.createElement("select");
    select.className = "form-select form-select-sm hr-filter-select";
    select.dataset.key = key;

    // "All" option
    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "Alle";
    select.appendChild(allOption);

    options.forEach(({ label: optLabel, value }) => {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = optLabel;
      select.appendChild(opt);
    });

    select.addEventListener("change", () => {
      current[key] = select.value || null;
      onChange({ ...current });
    });

    wrapper.appendChild(lbl);
    wrapper.appendChild(select);
    bar.appendChild(wrapper);
  });

  return bar;
}

/**
 * Build a sort dropdown.
 * @param {object[]} sortOptions – [{ label, value }]
 * @param {Function} onSort – called with the selected sort value
 * @returns {HTMLElement}
 */
function createSortDropdown(sortOptions, onSort) {
  const wrapper = document.createElement("div");
  wrapper.className = "d-flex align-items-center gap-2 mb-3 hr-sort-bar";

  const lbl = document.createElement("label");
  lbl.className = "form-label small mb-0";
  lbl.textContent = "Sorter etter:";

  const select = document.createElement("select");
  select.className = "form-select form-select-sm hr-sort-select";

  sortOptions.forEach(({ label, value }) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => onSort(select.value));

  wrapper.appendChild(lbl);
  wrapper.appendChild(select);
  return wrapper;
}

export { createFilterBar, createSortDropdown };
