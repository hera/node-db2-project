
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("cars").del()
        .then(function () {
            // Inserts seed entries
            return knex("cars").insert([
                {
                    vin: "YV1672MK8C2000000",
                    make: "Volvo",
                    model: "C30 T5 2 Door Hatchback",
                    year: 2012,
                    mileage: 100000,
                    titleStatus: "clean",
                    transmission: "automatic",
                    notes: "Minor scratches"
                },
                {
                    vin: "YV1672MK8C2386700",
                    make: "Audi",
                    model: "TT 90",
                    year: 2010,
                    mileage: 50000,
                    titleStatus: "clean",
                    transmission: "manual"
                },
                {
                    vin: "YV3867MK8C2007600",
                    make: "Toyota",
                    model: "Camry",
                    year: 2020,
                    mileage: 2000,
                    titleStatus: "clean",
                    transmission: "automatic"
                },
                {
                    vin: "SU1672MK8C2000000",
                    make: "Subaru",
                    model: "Impreza TDi",
                    year: 2005,
                    mileage: 200000
                },
            ]);
        });
};
