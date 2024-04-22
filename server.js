const express = require('express');
const app = express();

// Menambahkan middleware untuk mengizinkan akses ke resource dari semua domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Daftar review
const reviews = [
  { id: 1, text: 'Great app!', imageUrl: 'https://iili.io/JSuzH74.jpg' },
  { id: 2, text: 'Awesome!', imageUrl: 'https://iili.io/JSuz7CF.jpg' },
];

// Endpoint untuk mengambil daftar review
app.get('/reviews', (req, res) => {
  res.json(reviews);
});

// Menjalankan server pada port tertentu
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
