const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')





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
  profile_pic:{
    type:String
  },
  cover_pic:{
    type:String
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
