const carsDb = require("../../data/carsDb");
const inspector = require("schema-inspector");

module.exports = {
    validateCarData,
    isVinUnique
};

function validateCarData (req, res, next) {
    const carData = req.body;

    // Sanitization schema

    const sanSchema = {
        type: "object",
        properties: {
            vin: {
                type: "string",
                rules: ["trim", "upper"]
            },
            make: {
                type: "string"
            },
            model: {
                type: "string"
            },
            year: {
                type: "number",
                min: 1800,
                max: 2099
            },
            mileage: {
                type: "number",
                min: 0,
                max: 9000000
            },
            titleStatus: {
                type: "string",
                optional: true,
                rules: ["trim"]
            },
            transmission: {
                type: "string",
                optional: true,
                rules: ["trim"]
            },
            notes: {
                type: "string",
                optional: true,
                rules: ["trim"]
            }
        }
    };


    // Validation schema

    const valSchema = {
        type: "object",
        properties: {
            vin: {
                type: "string",
                exactLength: 17
            },
            make: {
                type: "string",
                maxLength: 50
            },
            model: {
                type: "string",
                maxLength: 100
            },
            year: {
                type: "number",
                gt: 1800,
                lt: 2099
            },
            mileage: {
                type: "number",
                gte: 0,
                lt: 9000000
            },
            titleStatus: {
                type: "string",
                optional: true,
                maxLength: 50
            },
            transmission: {
                type: "string",
                optional: true,
                maxLength: 50
            },
            notes: {
                type: "string",
                optional: true
            }
        }
    };

    const sanitizedResult = inspector.sanitize(sanSchema, carData);
    const validationResult = inspector.validate(valSchema, sanitizedResult.data);
    
    if (validationResult.valid) {
        next();
    } else {
        res.status(400).json({
            error: "Bad request. Please provide valid car data.",
            description: validationResult.error
        });
    }
}

function isVinUnique (req, res, next) {
    carsDb.getByVin(req.body.vin)
        .then(cars => {
            if (!cars.length) {
                next();
            } else {
                res.status(400).json({
                    error: "Car vin already exists."
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all cars.",
                description: error
            });
        });
}