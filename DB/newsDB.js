const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')





const data = new mongoose.Schema({
  
  image:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true,
    unique:true,
    

  },
  link:{
    type:String,
    required:true
  },
  
  login:{
    type:Array
  },
  
  
 date:{
      type : Date,
      default: Date.now
  }

}

);




module.exports = User = mongoose.model('News', data);
