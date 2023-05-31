const { error, Console } = require("console");
const path = require('path');
const rootDir = path.dirname(process.mainModule.filename);
const Booking = require("../models/booking");

exports.getbookings = async(req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
};
exports.postbooking =  async(req, res, next) => {
    try {
        //const { name, email, phone } = req.body;
        const name= req.body.name;
        const email= req.body.email;
        const phone= req.body.phone;

        

        const data = await Booking.create({
            name: name,
            email: email,
            phone: phone,
        });
        
        res.status(200).json({ bookings: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
    
};

exports.getData = async (req, res, next) => {
    try {
      const booking = await Booking.findAll();
      res.status(200).json({ allBookings: booking });  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  };

exports.postDelete= async (req, res, next) => {
    try {
      if (!req.params.id) {
        console.log("ID IS MISSING");
        return res.status(400).json({ err: "ID is missing" });
      }
      const uId = req.params.id;
      await Booking.destroy({ where: { id: uId } });
  
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };