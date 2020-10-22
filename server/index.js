
const express = require("express") ;
const bodyParser = require("body-parser");
const mongoose = require("mongoose") ;
const rentalRoutes = require("./routes/rentals");
const usersRoutes = require("./routes/users");
const bookingRoutes = require("./routes/bookings") ;
const { provideErrorHandler } = require("./middlewares") ;

// models

const Rental = require("./models/rental") ;
const User = require("./models/user") ;
const Booking = require("./models/booking") ;
const { onlyAuthUser } = require("./controllers/users") ;


const app = express();
const config = require("./config/dev") ;
const PORT = process.env.PORT || 3001 ;


mongoose.connect(config.DB_URI,{
  useNewUrlParser : true ,
  useUnifiedTopology : true ,
  useCreateIndex : true
},() => {
  console.log("Connected to DB !!") ;
});

// Middleware

 app.use(bodyParser.json()) ;
 app.use(provideErrorHandler) ;

app.get("/api/v1/secret" , onlyAuthUser , (req , res ) => {

  return res.json({message : "secret message ."});
})

//  Api Routes

app.use("/api/v1/rentals",rentalRoutes);
app.use("/api/v1/users",usersRoutes);
app.use("/api/v1/bookings" , bookingRoutes) ; 

app.listen(PORT , () => {
  console.log("server is running .") ;
});
