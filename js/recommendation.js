/**
 * recommendation.js
 * Scoring and ranking logic for cities and care centers based on user preferences.
 */

import { getState } from "./state.js";

/** Scoring weights */
const WEIGHT_COUNTY_MATCH   = 30;
const WEIGHT_MOBILITY_MATCH = 20;
const WEIGHT_INTEREST_MATCH = 10;
const WEIGHT_RATING_OVERALL = 5;
const WEIGHT_RATING_DETAIL  = 3;

/**
 * Score a single city against the current user preferences.
 * Returns a numeric score (higher = better match).
 * @param {object} city
 * @returns {number}
 */
function scoreCity(city) {
  const { counties, mobility, interests, priorities } = getState();
  let score = 0;

  // County match – strong signal
  if (counties && counties.length > 0 && counties.includes(city.county)) {
    score += WEIGHT_COUNTY_MATCH;
  }

  // Mobility compatibility
  if (mobility && city.mobility && city.mobility.includes(mobility)) {
    score += WEIGHT_MOBILITY_MATCH;
  }

  // Interest overlap
  if (interests && interests.length > 0 && city.tags) {
    const overlap = interests.filter((i) => city.tags.includes(i));
    score += overlap.length * WEIGHT_INTEREST_MATCH;
  }

  // Priority-based scoring
  if (priorities && priorities.length > 0) {
    if (priorities.includes("helsestilbud")) score += city.healthScore || 0;
    if (priorities.includes("aktivitetstilbud")) score += city.activitiesScore || 0;
    if (priorities.includes("nærhet_til_familie")) score += city.careScore || 0;
  }

  return score;
}

/**
 * Rank a list of cities from best to worst match for the current user.
 * @param {object[]} cities
 * @returns {object[]} – cities sorted descending by score, each augmented with a `score` field
 */
function rankCities(cities) {
  return cities
    .map((city) => ({ ...city, score: scoreCity(city) }))
    .sort((a, b) => b.score - a.score);
}

/**
 * Score a care center against the current user preferences.
 * @param {object} center  – care center object, may include a `rating` sub-object
 * @returns {number}
 */
function scoreCareCenter(center) {
  const { mobility, priorities } = getState();
  let score = 0;

  // Mobility
  if (mobility && center.mobility && center.mobility.includes(mobility)) {
    score += WEIGHT_MOBILITY_MATCH;
  }

  // Rating
  if (center.rating) {
    score += (center.rating.overall || 0) * WEIGHT_RATING_OVERALL;

    if (priorities && priorities.includes("helsestilbud")) {
      score += (center.rating.staff || 0) * WEIGHT_RATING_DETAIL;
    }
    if (priorities && priorities.includes("aktivitetstilbud")) {
      score += (center.rating.activities || 0) * WEIGHT_RATING_DETAIL;
    }
  }

  return score;
}

/**
 * Rank a list of care centers from best to worst match for the current user.
 * @param {object[]} centers
 * @returns {object[]}
 */
function rankCareCenters(centers) {
  return centers
    .map((center) => ({ ...center, score: scoreCareCenter(center) }))
    .sort((a, b) => b.score - a.score);
}

/**
 * Filter activities by current user preferences (mobility, interests).
 * @param {object[]} activities
 * @returns {object[]}
 */
function filterActivities(activities) {
  const { mobility, interests } = getState();

  return activities.filter((activity) => {
    const mobilityOk = !mobility || !activity.mobility || activity.mobility.includes(mobility);
    const interestOk =
      !interests ||
      interests.length === 0 ||
      !activity.type ||
      interests.includes(activity.type);
    return mobilityOk && interestOk;
  });
}

export { scoreCity, rankCities, scoreCareCenter, rankCareCenters, filterActivities };
