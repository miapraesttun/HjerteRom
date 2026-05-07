/**
 * recommendation.js
 *
 * Denne filen inneholder ALL anbefalings- og sorteringslogikk.
 *
 * Dette er ren forretningslogikk:
 * - Tar inn data
 * - Gjør beregninger
 * - Returnerer resultater
 *
 * Prinsipper:
 * - Ingen state lagres her
 * - Leser ikke fra DOM
 * - Leser ikke direkte fra globale variabler
 * - Henter ikke data selv
 */

/**
 * Denne filen skal:
 * - Bestemme anbefalt by basert på preferanser og bydata
 * - Rangere og filtrere omsorgssentre
 * - Returnere strukturerte resultater (ikke formatert tekst)
 *
 * Denne filen skal IKKE:
 * - vite hvilken side den brukes på
 * - manipulere HTML
 * - lagre noe i state direkte
 * - bruke Google Maps eller andre API-er
 */

/**
 * Forventet input (konseptuelt):
 * - brukerpreferanser (fra state)
 * - datasett (fra dataService)
 *
 * Forventet output:
 * - objekt(er) med score, prioriteringer og anbefalinger
 *
 * UI-laget bestemmer hvordan dette vises.
 */

/**
 * Tommelfingerregel:
 * Hvis denne filen kunne kjørt i Node uten browser,
 * er ansvaret riktig plassert.
 */
``