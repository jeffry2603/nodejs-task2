// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port 3000 by default

// Middleware to parse JSON requests
app.use(express.json());

// Sample data storage (You can replace this with a database)
const rooms = [];
const bookings = [];
const customers = [];

// Create a Room
app.post('/api/rooms', (req, res) => {
  // Implement logic to create a room here
});

// Book a Room
app.post('/api/bookings', (req, res) => {
  // Implement logic to book a room here
});

// List all Rooms with Booked Data
app.get('/api/rooms/booked', (req, res) => {
  // Implement logic to list booked rooms here
});

// Listing all Customers with Booked Data
app.get('/api/customers/booked', (req, res) => {
  // to list customers with booked data here
});

//  how many times a customer has booked a room
app.get('/api/customers/:customerId/bookings', (req, res) => {
  //  to count customer bookings here
});

// Starting
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
