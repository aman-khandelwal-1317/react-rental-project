
const express = require("express") ;
const bodyParser = require("body-parser");
const mongoose = require("mongoose") ;
const rentalRoutes = require("./routes/rentals");

// models

const Rental = require("./models/rental") ;


const app = express();
const config = require("./config/dev") ;
const PORT = process.env.PORT || 3001 ;

mongoose.connect(config.DB_URI,{
  useNewUrlParser : true ,
  useUnifiedTopology : true
},() => {
  console.log("Connected to DB !!") ;
});

// Middleware

app.use(bodyParser.json()) ;

// Api Routes

app.use("/api/v1/rentals",rentalRoutes);

app.listen(PORT , () => {
  console.log("server is running .") ;
});
