/**
 * dataService.js
 * Unified data access layer.
 * Fetches from local JSON files; in the future these calls can be swapped
 * for real API endpoints without changing calling code.
 */

const BASE_PATH = "../data";

/** Generic JSON fetcher with error handling */
async function fetchJSON(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`HjerteRom dataService: failed to fetch ${path} (${response.status})`);
  }
  return response.json();
}

/** Fetch all cities */
async function getCities() {
  return fetchJSON(`${BASE_PATH}/cities.json`);
}

/**
 * Fetch activities, optionally filtered by cityId.
 * @param {string|null} cityId
 */
async function getActivities(cityId = null) {
  const activities = await fetchJSON(`${BASE_PATH}/activities.json`);
  if (cityId) {
    return activities.filter((a) => a.cityId === cityId);
  }
  return activities;
}

/**
 * Fetch care centers, optionally filtered by cityId.
 * @param {string|null} cityId
 */
async function getCareCenters(cityId = null) {
  const centers = await fetchJSON(`${BASE_PATH}/carecenters.json`);
  if (cityId) {
    return centers.filter((c) => c.cityId === cityId);
  }
  return centers;
}

/** Fetch all ratings */
async function getRatings() {
  return fetchJSON(`${BASE_PATH}/ratings.json`);
}

/**
 * Fetch the rating for a specific care center.
 * @param {string} careCenterId
 */
async function getRating(careCenterId) {
  const ratings = await getRatings();
  return ratings.find((r) => r.id === careCenterId) || null;
}

/**
 * Fetch care centers enriched with their rating objects for a given city.
 * @param {string|null} cityId
 */
async function getCareCentersWithRatings(cityId = null) {
  const [centers, ratings] = await Promise.all([getCareCenters(cityId), getRatings()]);
  const ratingMap = Object.fromEntries(ratings.map((r) => [r.id, r]));
  return centers.map((c) => ({
    ...c,
    rating: ratingMap[c.ratingId] || null,
  }));
}

export {
  getCities,
  getActivities,
  getCareCenters,
  getRatings,
  getRating,
  getCareCentersWithRatings,
};
