const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')

  

const data = new mongoose.Schema({
  

  userid:{
    type:String,
    unique:true
  },
      cin: {
        type: String,
        required:true,
        unique:true
      },
      pan: {
        type: String,
        required:true,
        unique:true
      },
      startup_name: {
        type: String,
       
        required:true,
      
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
     
      founder_name: {
        type: Array,
        required:true,
      },
      cofounder_name: {
        type: Array,
        required:true,
      },
      company_email: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[isEmail,"Please enter valid email"]
      },
      founder_email: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[isEmail,"Please enter valid email"]
      },
      cofounder_email: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[isEmail,"Please enter valid email"]
      },
    
      investment_need:{
        type:String,
          required:true
      },
      founder_aadhar_number:{
        type:String,
          required:true
      },
      founder_pan_number:{
        type:String,
          required:true
      },
      co_founder_aadhar_number:{
        type:String,
          required:true
      },
      co_founder_pan_number:{
        type:String,
          required:true
      },
      gst_number:{
        type:String,
          required:true
      },
      dipp_number:{
        type:String,
          required:true
      },
      udyan_number:{
        type:String,
          required:true
      },
      office_address:{
        type:String,
          required:true
      },
      incorporation_date:{
        type:String,
          required:true
      },
      ac_no:{
        type:String,
          required:true
      },
      ifsc:{
        type:String,
          required:true
      },
      name:{
        type:String,
          required:true
      },
      bank_name:{
        type:String,
          required:true
      },

      
      documents:{
    
        type:Array
      },
  
      startup_size:{
        type:Number,
          required:true
      },
      about_startup:{
        type:String,
          required:true
      },
      startup_stage:{
        type:String,
          required:true
      },
      already_funded:{
        type:Boolean,
          required:true
      },
  
 date:{
      type : Date,
      default: Date.now
  }

}

);



module.exports = startup = mongoose.model('startup', data);
