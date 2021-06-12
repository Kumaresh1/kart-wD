const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')



const startup={

  profile_name:{
  type:String
  } , 
    cin: {
      type: String,
      required:true,
      unique:true
    },
    userid:{
      type:String
    },
    pan: {
      type: String,
      required:true,
      unique:true
    },
    name_of_startup: {
      type: String,
     
      required:true,
    
    },
   
    name_of_founder: {
      type: String,
      required:true,
    },
    name_of_cofounder: {
      type: String,
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
  
    password:{
      type:String,
      minlength:6,
        required:true
    },
    investment_need:{
      type:String,
        required:true
    },
    documents:{
  
      type:Array
    }
  };

const investor={
  
  profile_name:{
  type:String
  } , 
    cin: {
      type: String,
      required:true,
      unique:true
    },
    userid:{
      type:String
    },
    pan: {
      type: String,
      required:true,
      unique:true
    },
    name_of_startup: {
      type: String,
     
      required:true,
    
    },
   
    name_of_founder: {
      type: String,
      required:true,
    },
    name_of_cofounder: {
      type: String,
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
  
    password:{
      type:String,
      minlength:6,
        required:true
    },
    investment_need:{
      type:String,
        required:true
    },
    documents:{
  
      type:Array
    }
  };


  const govt_organisation={
  
    profile_name:{
    type:String
    } , 
      cin: {
        type: String,
        required:true,
        unique:true
      },
      userid:{
        type:String
      },
      pan: {
        type: String,
        required:true,
        unique:true
      },
      name_of_startup: {
        type: String,
       
        required:true,
      
      },
     
      name_of_founder: {
        type: String,
        required:true,
      },
      name_of_cofounder: {
        type: String,
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
    
      password:{
        type:String,
        minlength:6,
          required:true
      },
      investment_need:{
        type:String,
          required:true
      },
      documents:{
    
        type:Array
      }
    };
  

  

const data = new mongoose.Schema({
  
  name:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    validate:[isEmail,"Please enter valid email"]
  

  },
  user_type:{
    type:String,
    required:true
  },
  
  password:{
    type:String,
    required:true
  },
  
  
  
 date:{
      type : Date,
      default: Date.now
  }

}

);



data.pre('save', function(next) {
    if(!this.isModified('password')) {
        return next()
    }
console.log("pre -> Password ; ",this.password);
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if(err) {
            return next(err);
        }

        this.password = passwordHash;
        next();
    });
});

module.exports = User = mongoose.model('Users', data);
