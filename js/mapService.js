
//funksjon for kartet i Stedinfo-siden (zoomer inn i byen du trykker på)
const cityCoords = municipality.coordinates; // { lat: 60.3913, lng: 5.3221 }
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, // Zoomer inn nok til å se gater og sentrum
    center: cityCoords,
});
