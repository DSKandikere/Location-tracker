// Get user's current location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Display the location on the page
  const locationDisplay = document.getElementById('location-display');
  locationDisplay.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

  // Send location data to the backend (optional, if you have a backend)
  // ... (same as the previous code)
}

function error() {
  console.error('Error getting location');
  const locationDisplay = document.getElementById('location-display');
  locationDisplay.textContent = 'Error getting location';
}