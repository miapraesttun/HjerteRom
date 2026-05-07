
//funksjon for kartet i Stedinfo-siden (zoomer inn i byen du trykker på)
const cityCoords = municipality.coordinates; // { lat: 60.3913, lng: 5.3221 }
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, // Zoomer inn nok til å se gater og sentrum
    center: cityCoords,
});
/**
 * mapService.js
 *
 * Dette er et isolert grensesnitt mot Google Maps API.
 *
 * Hensikt:
 * - Skjule all kompleksitet rundt Google Maps
 * - Gi resten av appen enkle funksjoner å bruke
 *
 * Ingen andre filer enn denne
 * skal snakke direkte med Google Maps.
 */

/**
 * mapService.js skal:
 * - Initialisere kart i et gitt container-element
 * - Vise markører basert på ferdig strukturert data
 * - Beregne avstand og reisetid
 *
 * mapService.js skal ikke:
 * - velge HVA som vises på kartet
 * - lese brukerpreferanser direkte
 * - lagre state
 * - formatere tekst for UI
 * - ta beslutninger
 */

/**
 * Forventet input:
 * - steder med navn, type og koordinater
 *
 * Forventet output:
 * - referanser til kart / beregnet distanse / varighet
 *
 * mapService er en "dum tjeneste":
 * Den gjør kun det den blir bedt om.
 */

/**
 * VIKTIG:
 * Denne filen skal være mulig å bytte ut
 * (Google Maps → annen kartleverandør)
 * uten at resten av appen må endres.
 */
``
