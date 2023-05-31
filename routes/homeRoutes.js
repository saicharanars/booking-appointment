const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');


const router = express.Router();
router.get("/",homeController.getbookings);
router.get("/get-data",homeController.getData);
router.post("/add-booking",homeController.postbooking);
router.delete('/delete-booking/:id',homeController.postDelete);


router.post('/edit-booking/:id',homeController.postEdit);
module.exports = router;