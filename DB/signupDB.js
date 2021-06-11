const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt = require('bcrypt')


const data = new mongoose.Schema({
  
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
      required:true
  },
  investment_need:{
    type:String,
      required:true
  },
  documents:{

    type:Array
  },

 date:{
      type : Date,
      default: Date.now
  }

},
{timestamps: true}
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
