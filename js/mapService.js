/**
 * mapService.js
 * Google Maps integration.
 * Requires a Maps JavaScript API key set as window.MAPS_API_KEY
 * (or in a local config.js that is NOT committed to version control).
 */

let _map = null;
const _markers = [];

/**
 * Initialise a Google Map inside the given HTML element.
 * @param {string|HTMLElement} container – element id or DOM node
 * @param {object} options – { lat, lng, zoom }
 * @returns {google.maps.Map}
 */
function initMap(container, { lat = 60.3913, lng = 5.3221, zoom = 7 } = {}) {
  const el = typeof container === "string" ? document.getElementById(container) : container;
  if (!el) {
    console.error("mapService: container element not found");
    return null;
  }

  if (typeof google === "undefined" || !google.maps) {
    console.error("mapService: Google Maps API is not loaded");
    return null;
  }

  _map = new google.maps.Map(el, {
    center: { lat, lng },
    zoom,
  });

  return _map;
}

/**
 * Add a marker for a location (city or care center).
 * @param {object} item – must have { name, coordinates: { lat, lng } }
 * @param {Function|null} onClick – optional click handler
 * @returns {google.maps.Marker}
 */
function addMarker(item, onClick = null) {
  if (!_map) {
    console.warn("mapService: map not initialised");
    return null;
  }

  const marker = new google.maps.Marker({
    position: { lat: item.coordinates.lat, lng: item.coordinates.lng },
    map: _map,
    title: item.name,
  });

  if (onClick) {
    marker.addListener("click", () => onClick(item, marker));
  }

  _markers.push(marker);
  return marker;
}

/**
 * Place markers for an array of items with an info-window showing name + address.
 * @param {object[]} items
 */
function addMarkers(items) {
  const infoWindow = new google.maps.InfoWindow();

  items.forEach((item) => {
    addMarker(item, (clicked) => {
      infoWindow.setContent(
        `<strong>${clicked.name}</strong>${clicked.address ? `<br>${clicked.address}` : ""}`
      );
      infoWindow.open(_map, _markers.find((m) => m.getTitle() === clicked.name));
    });
  });
}

/** Remove all markers from the map */
function clearMarkers() {
  _markers.forEach((m) => m.setMap(null));
  _markers.length = 0;
}

/** Pan and zoom to a specific location */
function panTo(lat, lng, zoom = 12) {
  if (_map) {
    _map.panTo({ lat, lng });
    _map.setZoom(zoom);
  }
}

/** Return the current map instance */
function getMap() {
  return _map;
}

export { initMap, addMarker, addMarkers, clearMarkers, panTo, getMap };
