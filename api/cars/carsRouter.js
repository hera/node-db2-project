const express = require("express");
const carsDb = require("../../data/carsDb");

const router = express.Router();


// Get all cars

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


// Get a car by id

router.get("/:id", (req, res) => {
    carsDb.getById(req.params.id)
        .then(cars => {
            if (cars.length) {
                res.status(200).json(cars);
            } else {
                res.status(404).json({
                    error: `Not found. Car with id ${req.params.id} does not exist.`
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                error: `Server error. Could not get a car with id ${req.params.id}`,
                description: error
            });
        });
});


module.exports = router;