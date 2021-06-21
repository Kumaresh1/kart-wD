const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')


const data = new mongoose.Schema({


  userid:{
    type:String,
    unique:true
  },
  
  aadhar_card:{
    type:String,
    required:true
  },
  pan_card:{
    type:String,
    required:true
  },
  investment_size:{
    type:Number,
    required:true,
  

  },
  
  investment_industry:{
    type:String,
    required:true
  },
  
  documents:{
    type:Array,
   
  },
  about:{
    type : String,
    default:true
  },
  bookmark:{
    type:Number,
    default:0
  },
  
 date:{
      type : Date,
      default: Date.now
  }

}

);





module.exports = User = mongoose.model('Investors', data);
