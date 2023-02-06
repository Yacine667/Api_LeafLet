var map = L.map('map').setView([48.584614, 7.7507127], 13);
var marker = L.marker([48.5497744, 7.7380094]).addTo(map);
var marker2 = L.marker([48.5576075, 7.7477045]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '',
}).addTo(map);

marker.bindPopup("<b>Elan Formation</b><br>03 03 03 03 03");
marker2.bindPopup("<b>Elan Formation</b><br>03 03 03 03 03");