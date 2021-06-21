const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')
  

const data = new mongoose.Schema({
  
  userid:{
    type:String,
    unique:true
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

  bookmark:{
    type:Number,
    default:0
  },
logo:{
  type:String,
  required:true
 
},
department_name:{
  type:String,
  required:true
},
about_us:{
  type:String,
required:true  
},
facility_we_provide:{
  type:String
}


}

);




module.exports = User = mongoose.model('GovtOrg', data);
