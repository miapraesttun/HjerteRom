/**
 * state.js
 *
 * Dette er den Sentrale Tilstanden for hele applikasjonen.
 *
 * ALL brukerdata og avledede valg skal lagres her.
 * Ingen andre filer skal eie eller duplisere state.
 *
 * Prinsipper:
 * - Ingen DOM-manipulasjon
 * - Ingen API-kall
 * - Ingen anbefalingslogikk
 * - Ingen kartlogikk
 *
 * Denne filen:
 * - lagrer brukerens valg og resultater
 * - eksponerer enkle funksjoner for å lese/oppdatere state
 *
 * Alle sider, komponenter og tjenester:
 * - leser FRA state
 * - skriver IKKE direkte til hverandre
 */

/**
 * Struktur for state (konseptuelt):
 *
 * user:
 * - role (foreldre / meg selv)
 * - age
 *
 * preferences:
 * - regions (fylker)
 * - mobilityLevel
 * - priorities (kultur, sosialt, kollektiv osv.)
 *
 * results:
 * - recommendedCity
 * - recommendationScore / reasons
 * - filteredActivities
 * - recommendedCareCenters
 */

/**
 * State-ansvar:
 * - Oppdatere state når bruker gjør valg
 * - Gjøre state tilgjengelig for lesing
 * - Kun lagre data – aldri tolke den
 */

/**
 * MERK:
 * All avansert logikk som "hva er best"
 * skal ligge i recommendation.js – ikke her.
 */