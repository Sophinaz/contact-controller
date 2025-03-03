const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connnectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000; 

connnectDb();
const app = express();

app.use(express.json())
app.use("/api/contacts", require("./routes/contactroute"))
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
});
