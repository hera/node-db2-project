const express = require("express");
const carsRouter = require("./api/cars/carsRouter");

const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.json());

server.use("/api/cars", carsRouter);

server.listen(PORT, () => {
    console.log(`\n== API running on port ${PORT} ==\n`);
});
