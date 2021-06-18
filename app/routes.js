const { Router } = require('express');
const router = Router();

//Import controllers
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');


//Home
router.get('/', (req, res) => {
    res.json('hello world')
});


//Users
router.get('/users', UserController.all);



//Addresses
router.get('/addresses', AddressController.all);




module.exports = router;