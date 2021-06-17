const express = require('express');
const app = express();

//settings
const PORT = process.env.PORT || 3300;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {
    res.json({ hello: "world"});
});

//server initialization
app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
});