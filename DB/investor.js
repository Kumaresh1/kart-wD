const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')


const data = new mongoose.Schema({


  userid:{
    type:String,
    unique:true
  },
 
  company_name:{
    type:String,
    unique:true
  },
 
  investment_size:{
    type:Number,
    required:true,
  

  },

  
  investment_industry:{
    type:String,
    required:true
  },
 status:{
    type:String,
  },
 
  invested_amount:{
    type:Number,
  },
  valuation_cap:{
    type:String,
  },
  discount:{
    type:Number,
  },
 
 
  documents:{
    type:Array,
   
  },
  about:{
    type : String,
    default:true
  },
  funding_goal:{
    type : String,
    default:true
  },
  location:{
    type : String,
    default:true
  },



  aadhar_card:{
    type:String,
    required:true
  },
  pan_card:{
    type:String,
    required:true
  },
 

  bookmark:{
    type:Number,
    default:0
  },
  twitter:{
    type:String
  },
  linkedin:{
    type:String
  },facebook:{
    type:String
  },
  instagram:{
    type:String
  },
  
  website:{
    type:String
  },
  
 date:{
      type : Date,
      default: Date.now
  }

}

);





module.exports = User = mongoose.model('Investors', data);
