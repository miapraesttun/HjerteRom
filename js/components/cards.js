/**
 * cards.js
 * Card component factory functions for cities, care centers and activities.
 */

/**
 * City recommendation card.
 * @param {object} city – city data object (may include `score` field)
 * @param {Function} onSelect – called with the city object when the card is clicked
 * @returns {HTMLElement}
 */
function createCityCard(city, onSelect) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  col.innerHTML = `
    <div class="card hr-card h-100" role="button" tabindex="0"
         aria-label="Velg ${city.name}">
      <div class="card-body">
        <h5 class="card-title">
          <i class="bi bi-geo-alt-fill text-primary me-2"></i>${city.name}
        </h5>
        <p class="card-text text-muted small">${city.county}</p>
        <p class="card-text">${city.description}</p>
        ${
          city.score !== undefined
            ? `<span class="badge bg-primary">Match: ${city.score}</span>`
            : ""
        }
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div>
          <i class="bi bi-heart-pulse me-1 text-danger"></i>
          <small>Helse ${city.healthScore}/10</small>
        </div>
        <div>
          <i class="bi bi-activity me-1 text-success"></i>
          <small>Aktivitet ${city.activitiesScore}/10</small>
        </div>
      </div>
    </div>
  `;

  const card = col.querySelector(".card");
  const handleSelect = () => onSelect(city);
  card.addEventListener("click", handleSelect);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") handleSelect();
  });

  return col;
}

/**
 * Care center card.
 * @param {object} center – care center with optional `rating` sub-object
 * @param {Function} onSelect
 * @returns {HTMLElement}
 */
function createCareCenterCard(center, onSelect) {
  const rating = center.rating;
  const stars = rating ? "★".repeat(Math.round(rating.overall)) + "☆".repeat(5 - Math.round(rating.overall)) : "";

  const col = document.createElement("div");
  col.className = "col-12 col-md-6";

  col.innerHTML = `
    <div class="card hr-card h-100" role="button" tabindex="0"
         aria-label="Vis ${center.name}">
      <div class="card-body">
        <h5 class="card-title">
          <i class="bi bi-building-heart text-primary me-2"></i>${center.name}
        </h5>
        <p class="card-text text-muted small">
          <i class="bi bi-map-fill me-1"></i>${center.address}
        </p>
        ${
          rating
            ? `<p class="card-text">
                <span class="hr-stars text-warning">${stars}</span>
                <small class="text-muted ms-1">${rating.overall.toFixed(1)} (${rating.reviewCount} anmeldelser)</small>
               </p>`
            : ""
        }
        <div class="d-flex flex-wrap gap-1 mt-2">
          ${(center.specializations || [])
            .map((s) => `<span class="badge bg-secondary">${s}</span>`)
            .join("")}
        </div>
      </div>
      <div class="card-footer">
        <small><i class="bi bi-telephone me-1"></i>${center.phone}</small>
      </div>
    </div>
  `;

  const card = col.querySelector(".card");
  const handleSelect = () => onSelect(center);
  card.addEventListener("click", handleSelect);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") handleSelect();
  });

  return col;
}

/**
 * Activity card.
 * @param {object} activity
 * @param {Function} [onSelect]
 * @returns {HTMLElement}
 */
function createActivityCard(activity, onSelect = null) {
  const typeIcon = {
    natur: "bi-tree-fill",
    kultur: "bi-palette-fill",
    sosialt: "bi-people-fill",
  }[activity.type] || "bi-star-fill";

  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  col.innerHTML = `
    <div class="card hr-card h-100 ${onSelect ? 'hr-card-clickable' : ''}"
         ${onSelect ? 'role="button" tabindex="0"' : ''}
         aria-label="${activity.name}">
      <div class="card-body">
        <h5 class="card-title">
          <i class="bi ${typeIcon} text-success me-2"></i>${activity.name}
        </h5>
        <p class="card-text">${activity.description}</p>
        <span class="badge bg-success">${activity.type}</span>
      </div>
      <div class="card-footer">
        <small class="text-muted"><i class="bi bi-geo me-1"></i>${activity.address}</small>
      </div>
    </div>
  `;

  if (onSelect) {
    const card = col.querySelector(".card");
    card.addEventListener("click", () => onSelect(activity));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") onSelect(activity);
    });
  }

  return col;
}

export { createCityCard, createCareCenterCard, createActivityCard };
