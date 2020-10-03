const mongoose = require("mongoose") ;
const bcrypt = require("bcryptjs") ;
const Schema = mongoose.Schema ;

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

const userSchema  = new Schema({
   username : {
       type : String ,
       minlength : [4 , "Minimum 4 characters required !!!"] , 
       maxlength : [32,"Invalid length !! Max Allowed : 128 "] 
   } , 
   email : {
       type : String ,
       minlength : [4 , "Minimum 4 characters required !!!"] , 
       maxlength : [32,"Invalid length !! Max Allowed : 128 "] ,
       unique : true ,
       lowercase : true ,
       required : "Email is Required !!" ,
       match : EMAIL_PATTERN 
   } , 
   password : {
    type : String ,
    minlength : [4 , "Minimum 4 characters required !!!"] , 
    maxlength : [32,"Invalid length !! Max Allowed : 128 "] ,
    required : "Password is Required !!" 
   }
}) ;

userSchema.methods.hasSamePassword = function(providedPassword) {
    return bcrypt.compareSync(providedPassword , this.password) ;
}

//available on instance

userSchema.pre("save" , function (next) {
   const user = this ;

   bcrypt.genSalt(10,(err , salt) => {
        bcrypt.hash(user.password,salt , (err , hash) => {
        user.password = hash ;
        next() ;
        })
   })
})

module.exports = mongoose.model("User",userSchema) ;