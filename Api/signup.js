const express = require('express');
const mongoose = require('mongoose');
const userdb = require('../DB/signupDB');
const route = express.Router();
const bcrypt=require('bcrypt')

route.post('/signup', async (req, res) => {

  const data_body=req.body;

  console.log(data_body);

  let newuser = new userdb(data_body);
  await newuser.save()
  .then((result)=>{

    res.status("201").json(
      {
        "data":data_body,
      "message":"Saved success for "+data_body.name_of_startup,
      "status":true,
      "code":201    

      }
    );

  })
  .catch(err=>{

    res.status("500").json(
      {
        "data":err,
      "message":"Saved Failed ",
      "status":false,
      "code":500    

      }
    );


  })
 
 });


 route.post('/login', async (req, res) => {

  const data_body=req.body;

  const {userid,password}=data_body;

  // console.log(data_body);

  await userdb.findOne({company_email:userid})
 
  .then((result)=>{

    if(result.length==0){

      res.status("400").json(
        {
          "data":data_body,
        "message":"User not Found",
        "status":true,
        "code":400    
  
        }
      );
  
    }
    else{
    console.log(result);
      
      bcrypt.compare(password, result.password, function(err, result) {

        if (err) throw err;
        
        if(result==true){

          res.status("200").json(
            {
              "data":data_body,
            "message":"Login Sucessfull",
            "status":true,
            "code":200    
      
            }
          );
        }
        else{
          res.status("400").json(
            {
              "data":data_body,
            "message":"Wrong Password",
            "status":true,
            "code":400    
      
            }
          );
        }
      });

    }

    
  })
  .catch(err=>{

    res.status("400").json(
      {
        "data":data_body,
      "message":"User not Found",
      "status":true,
      "code":400    

      }
    );


  })
 
 });

 route.get('/allusers', async (req, res) => {

  
  await userdb.find({})
 
  .then((result)=>{

    res.status("200").json(
      {
        "data":result,
      "message":"Data Fetch Successful ",
      "status":true,
      "code":200    

      }
    );

  })
  .catch(err=>{

    console.log(err)

    res.status("500").json(
      {
        "data":err,
      "message":"Get data Failed ",
      "status":false,
      "code":500    

      }
    );


  })
 
 });


module.exports = route;
