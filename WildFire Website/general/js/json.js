document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const closeMenu = document.getElementById('closeMenu');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
});

let map;
let marker;
let geocoder;
let poly;

function initMap() {
  // 1.  Set Brisbane 4000 as the center
  const parkCenter = { lat: -27.389, lng: 152.963 };

  // 2. Initialize the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: parkCenter,
    zoom: 15,
  });

  // 3. Draw the fire area（Polygon，Bunyaville Conservation Park Red zone)
  const fireZoneCoords = [
    { lat: -27.377, lng: 152.945 },
    { lat: -27.372, lng: 152.96 },
    { lat: -27.372, lng: 152.98 },
    { lat: -27.378, lng: 152.995 },
    { lat: -27.39, lng: 153.0 },
    { lat: -27.398, lng: 152.99 },
    { lat: -27.398, lng: 152.97 },
    { lat: -27.39, lng: 152.95 },
    { lat: -27.382, lng: 152.945 }
  ];
  const fireZone = new google.maps.Polygon({
    paths: fireZoneCoords,
    strokeColor: "#FFD600",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFD600",
    fillOpacity: 0.35
  });
  fireZone.setMap(map);

  // 4. Fire Alert icon
  const fireIcon = {
    url: "image/advice.png", // fire icon path
    scaledSize: new google.maps.Size(48, 48)
  };
  const fireMarker = new google.maps.Marker({
    position: { lat: -27.385, lng: 152.97 }, // change to the center of the yellow area
    map: map,
    icon: fireIcon,
    title: "Wildfire Alert"
  });

  // 5. InfoWindow（optional）
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="max-width: 220px">
        <h3 style="color:#d35400; margin-bottom: 5px;">🔥 Wildfire Warning</h3>
        <p style="font-size: 14px;">
          Wildfire alert in Bunyaville Conservation Park. Stay alert and follow official advice.
        </p>
      </div>
    `
  });
  fireMarker.addListener("click", () => {
    infoWindow.open(map, fireMarker);
  });

  // Initialize Geocoder
  geocoder = new google.maps.Geocoder();

  // Bind postcode search event
  document.getElementById('searchBtn').addEventListener('click', handleSearch);
  document.getElementById('postcodeInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleSearch();
  });

  // 🖊️ Initialize polyline drawing
  poly = new google.maps.Polyline({
    strokeColor: "#000000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map: map,
  });
}

// Search postcode
function handleSearch() {
  const postcode = document.getElementById('postcodeInput').value.trim();

  if (!postcode) {
    alert("Enter the postcode.");
    return;
  }

  geocoder.geocode({ address: postcode + ', Australia' }, function (results, status) {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      map.setCenter(location);
      map.setZoom(14);
      marker.setPosition(location);
    } else {
      alert("Cannot find the location of the postcode: " + status);
    }
  });
}

// Add polyline points by clicking on the map
function addLatLng(event) {
  const path = poly.getPath();
  path.push(event.latLng);
  new google.maps.Marker({
    position: event.latLng,
    title: "#" + path.getLength(),
    map: map,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveBtn');
  const statusMessage = document.getElementById('statusMessage');

  saveBtn.addEventListener('click', () => {
    statusMessage.textContent = 'Setup finished. Security settings are now active.';
    saveBtn.style.display = 'none';
  });

  //  Keep menu functionality in this section
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const closeMenu = document.getElementById('closeMenu');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.check-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('checked');
      this.setAttribute('aria-checked', this.classList.contains('checked') ? 'true' : 'false');
    });
    item.addEventListener('keydown', function(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.classList.toggle('checked');
        this.setAttribute('aria-checked', this.classList.contains('checked') ? 'true' : 'false');
      }
    });
  });
});