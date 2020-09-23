
const mongoose = require("mongoose") ;
const Schema = mongoose.Schema ;


const rentalSchema  = new Schema({
    title: { type : String , required : true , maxlength : [128,"Invalid length !! Max Allowed : 128 "]},
    city: { type : String , required : true , lowercase : true },
    category: { type : String , required : true , lowercase : true },
    image: { type : String , required : true},
    numOfRooms: Number,
    shared: Boolean,
    description: { type : String , required : true},
    dailyPrice: Number
}) ;

//available on instance

rentalSchema.methods.sendError = function(res , config) {
    const { status , detail } = config ;
    return res
    .status(status)
    .send({errors : [{title : "Rental Error !! " , detail : detail}]});
}

//rentalSchema.statics.sendError = function(res , config) {
    // no new keyword required 

module.exports = mongoose.model("Rental",rentalSchema) ;
