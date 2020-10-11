
const mongoose = require("mongoose") ;

const user1Id = mongoose.Types.ObjectId() ;
const user2Id = mongoose.Types.ObjectId() ;

exports.users = [{
  _id : user1Id ,
  username : "Test User" ,
  email : "test@gmail.com" ,
  password : "testtest"
},

  {
    _id : user2Id ,
    username : "Test User2" ,
    email : "test2@gmail.com" ,
    password : "testtest2"
  }
]

exports.rentals = 
[{

    title: "Nice view on ocean",
    city: "san francisco",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 4,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 43 ,
    owner : user1Id
  },  {

    title: "Modern apartment in center",
    city: "new york",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 1,
    shared: false,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 11 ,
    owner : user1Id
  },
  {

    title: "Old house in nature",
    city: "bratislava",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    numOfRooms: 5,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 23 ,
    owner : user2Id
  }] ;

