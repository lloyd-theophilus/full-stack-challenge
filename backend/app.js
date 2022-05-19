const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

//Import routes
const suppliersRoute = require("./routes/supplier-route");
const questionsRoute = require("./routes/questions-route");

// Set default port for express app
const port = process.env.PORT || 5000;

const app = express();

// Apply middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Implement routes
app.use("/api/suppliers", suppliersRoute);
app.use("/api/questions", questionsRoute);




app.listen(port, () => console.log("Server running on port " + port));

