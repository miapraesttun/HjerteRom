/**
 * state.js
 * Manages user preferences and application state.
 * All modules read and write through this interface.
 */

const STORAGE_KEY = "hjerterom_state";

/** Validation constants */
const AGE_MIN = 0;
const AGE_MAX = 120;
const MAX_PRIORITIES = 3;

/** Default preference structure */
const DEFAULT_STATE = {
  userType: null,       // "foreldre" | "meg_selv"
  age: null,            // number
  counties: [],         // string[]
  mobility: null,       // "god" | "begrenset" | "rullestol"
  interests: [],        // string[]  e.g. ["natur", "kultur", "sosialt"]
  priorities: [],       // string[]  e.g. ["nærhet_til_familie", "helsestilbud", "aktivitetstilbud"]
  selectedCity: null,   // city id string
  onboardingComplete: false,
};

let _state = { ...DEFAULT_STATE };

/** Load persisted state from localStorage */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      _state = { ...DEFAULT_STATE, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.warn("HjerteRom: could not load state from localStorage", e);
    _state = { ...DEFAULT_STATE };
  }
}

/** Persist current state to localStorage */
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
  } catch (e) {
    console.warn("HjerteRom: could not save state to localStorage", e);
  }
}

/**
 * Update one or more fields in the state and persist immediately.
 * @param {Partial<typeof DEFAULT_STATE>} updates
 */
function setState(updates) {
  _state = { ...(_state), ...updates };
  saveState();
}

/** Return a shallow copy of the current state */
function getState() {
  return { ..._state };
}

/** Reset all preferences back to defaults and clear storage */
function resetState() {
  _state = { ...DEFAULT_STATE };
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // ignore
  }
}

// Load on module initialisation
loadState();

export { getState, setState, resetState, DEFAULT_STATE, AGE_MIN, AGE_MAX, MAX_PRIORITIES };
