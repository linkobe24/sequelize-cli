const express = require('express');
const app = express();
const { connection } = require('./database/db')

//settings
const PORT = process.env.PORT || 3300;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api',require('./routes'));

//server initialization
app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);

    connection.sync({ force: false }).then(() => {
        console.log('Tables synchronized');
    }).catch(err => {
        console.error(`An error has ocurred ${err}`);
    });
});