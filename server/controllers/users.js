
const User = require("../models/user") ;
const jwt = require("jsonwebtoken") ;

exports.login = (req , res) => {

    const { email , password } = req.body ;

    if(!password || !email) {
       // return res.status(422).send({errors : [{title : "Missing Data !!",detail : "Email or Password missing . "}]}) ;
        return res.sendApiError({status : 422 , title : "Missing Data !!",detail : "Email or Password missing . "}) ;
    }

    User.findOne({email : email} , (error , foundUser) => {
         
        if(error) {
           // return res.status(422).send({errors : [{title : "DB Error !",detail : "Ooops , something went wrong !! "}]}) ;
           return res.mongoError(error) ;
           }

           if(!foundUser) {
           // return res.status(422).send({errors : [{title : "Invalid Email !!",detail : "User doesnot Exist !! "}]}) ;
           return res.sendApiError({status : 422 , title : "Invalid Email !!",detail : "User doesnot Exist !! "}) ;
           }

           if(foundUser.hasSamePassword(password)) {
               //Generate JWT

               const token = jwt.sign({
                   sub : foundUser.id ,
                   username : foundUser.username 
               } , "sadfsg42345)vf",{expiresIn : "2h"})

               return res.json(token);
           } else {
           // return res.status(422).send({errors : [{title : "Invalid Password !!",detail : "Password do not match !! "}]}) ;
           return res.sendApiError({status : 422 , title : "Invalid Password !!",detail : "Password do not match !! "}) ;
           }

    })


}

exports.register = (req , res) => {

    const {username , email , password , passwordConfirmation} = req.body ;

    if(!password || !email) {
      //  return res.status(422).send({errors : [{title : "Missing Data !!",detail : "Email or Password missing . "}]}) ;
      return res.sendApiError({status : 422 , title : "Missing Data !!",detail : "Email or Password missing . "}) ;
      
    }

    if(password !== passwordConfirmation) {
       // return res.status(422).send({errors : [{title : "Invalid password !!",detail : "Password do not match . "}]}) ;
        return res.sendApiError({status : 422 , title : "Invalid password !!",detail : "Password do not match . "}) ;
    }

    User.findOne({email: email}, (error , existingUser) => {
       if(error) {
        // return res.status(422).send({errors : [{title : "DB Error !",detail : "Ooops , something went wrong !! "}]}) ;
        return res.mongoError(error) ;
       }

       if(existingUser) {
       // return res.status(422).send({errors : [{title : "Invalid Email !!",detail : "User Already Exists !! "}]}) ;
        return res.sendApiError({status : 422 , title : "Invalid Email !!",detail : "User Already Exists !! "}) ;
       }

          const user = new User({username , email , password , passwordConfirmation});
       user.save((error) => {
        if(error) {
           // return res.status(422).send({errors : [{title : "DB Error 1!!",detail : "Ooops , something went wrong !! "}]}) ;
           return res.mongoError(error) ;
        }
        
       return res.json({status: "Registered !!"}) ;

       })
    }) 
 }   

 exports.onlyAuthUser = (req , res , next) => {
    const token = req.headers.authorization ;

    if(token) {

        const decodedToken = parseToken(token) ;
        
        if(!decodedToken) { return notAuthorized(res) ; } 
        
        User.findById(decodedToken.sub , (error , foundUser) => {
             if(error) {
              //  return res.status(422).send({errors : [{title : "DB Error !",detail : "Ooops , something went wrong !! "}]}) ;
              return res.mongoError(error) ;
             }
             
             if(foundUser) {
                 res.locals.user = foundUser ;
                 next() ;
             } else {
                return notAuthorized(res) ;
             }
        })

    } else {
        return notAuthorized(res) ;
    }
 }

 function parseToken(token) {
     try {
        return jwt.verify(token.split(" ")[1] , "sadfsg42345)vf") ;
     } catch(error) {
         return null ;
     }
    
 }

 function notAuthorized(res) {
    return res.status(401).send({errors : [{title : "Not Authorized" , detail : "Need to log in to get access !!"}]}) ;
 }