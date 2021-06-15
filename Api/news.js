const express = require('express');
const mongoose = require('mongoose');
const userdb = require('../DB/newsDB');
const route = express.Router();
const bcrypt=require('bcrypt')

route.post('/save', async (req, res) => {

  const data_body=req.body;

  console.log(data_body);

  let newuser = new userdb(data_body);
  await newuser.save()
  .then((result)=>{

    res.status("201").json(
      {
        "data":data_body,
      "message":"Saved success for "+data_body.title,
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


 route.post('/search', async (req, res) => {

  const data_body=req.body;


  // console.log(data_body);

  await userdb.find(data_body)
 
  .then((result)=>{

              res.status("200").json(
            {
              "data":result,
            "message":"Data Found",
            "status":true,
            "code":200    
      
            }
          );
         

    

    
  })
  .catch(err=>{

    return res.status("400").json(
      {
        "data":data_body,
      "message":"User not Found",
      "status":true,
      "code":400    

      }
    );


  })
 
 }
 
 );

 route.get('/allnews', async (req, res) => {

  
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
