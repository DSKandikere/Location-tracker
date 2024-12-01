const express = require('express');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Firebase app
admin.initializeApp({
  // Replace with your Firebase project credentials
  credential: admin.credential.cert('C:\Users\Sumukh\Desktop\disha floder\VTU syllabus\miniproj\credentials.json'),
  databaseURL: 'https://console.firebase.google.com/project/hehe-90e3f/overview'
});

const database = admin.database();

app.post('/update-location', (req, res) => {
  const { latitude, longitude } = req.body;

  // Update user's location in Firebase Realtime Database
  database.ref('users/userId').update({
    latitude,
    longitude
  })
  .then(() => {
    res.json({ message: 'Location updated successfully' });
  })
  .catch(error => {
    console.error('Error updating location:', error);
    res.status(500).json({ error: 'Failed to update location' });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});