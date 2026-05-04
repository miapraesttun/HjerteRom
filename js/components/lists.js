/**
 * lists.js
 * Reusable list component factory functions.
 */

/**
 * Render a generic list of items.
 * @param {object[]} items
 * @param {Function} renderItem – (item) => HTMLElement
 * @param {string} [emptyMessage]
 * @returns {HTMLElement}
 */
function createList(items, renderItem, emptyMessage = "Ingen resultater funnet.") {
  const container = document.createElement("div");

  if (!items || items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "text-muted text-center py-4";
    empty.textContent = emptyMessage;
    container.appendChild(empty);
    return container;
  }

  const row = document.createElement("div");
  row.className = "row g-3";

  items.forEach((item) => {
    const el = renderItem(item);
    if (el) row.appendChild(el);
  });

  container.appendChild(row);
  return container;
}

/**
 * Render a simple <ul> list with text items.
 * @param {string[]} textItems
 * @param {string} [className]
 * @returns {HTMLUListElement}
 */
function createTextList(textItems, className = "list-group") {
  const ul = document.createElement("ul");
  ul.className = className;

  textItems.forEach((text) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = text;
    ul.appendChild(li);
  });

  return ul;
}

export { createList, createTextList };
