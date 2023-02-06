var map = L.map('map').setView([48.584614, 7.7507127], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '',
}).addTo(map);


var markers = L.markerClusterGroup();
markers.addLayer(L.marker([48.5497744, 7.7380094])).bindPopup("<b>Elan Formation</b><br>03 03 03 03 03");
markers.addLayer(L.marker([48.5576075, 7.7477045])).bindPopup("<b>Elan Formation</b><br>03 03 03 03 03");
map.addLayer(markers);