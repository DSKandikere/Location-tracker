// Get user's current location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Send location data to the backend
  fetch('/update-location', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ latitude, longitude })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Location updated successfully:', data);
  })
  .catch(error => {
    console.error('Error updating location:', error);
  });
}

function error() {
  console.error('Error getting location');
}