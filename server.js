const express = require('express');
const app = express();
const port = 4000;

// JSON middleware
app.use(express.json());

// Route'ları bağla
const blogRoutes = require('./routes/blogRoutes');
app.use('/api', blogRoutes);

app.listen(port, () => {
  console.log(`Server, http://localhost:${port} adresinde çalışıyor.`);
});