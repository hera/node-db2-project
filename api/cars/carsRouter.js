const express = require("express");
const carsDb = require("../../data/carsDb");

const router = express.Router();

router.get("/", (req, res) => {
    carsDb.get()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all cars.",
                description: error
            });
        });
});


module.exports = router;