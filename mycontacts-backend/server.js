const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connnectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connnectDb();
const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json())
app.use("/api/contacts", require("./routes/contactroute"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on ${port}`)
});
