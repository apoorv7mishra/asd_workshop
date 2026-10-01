const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const productRoutes = require('./routes/productRoutes');
app.use(express.json());
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
app.use('/', productRoutes);
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});