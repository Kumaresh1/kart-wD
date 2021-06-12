const express = require('express');
const mongoose = require('mongoose');
const userdb = require('../DB/signupDB');
const route = express.Router();

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
      "message":"Saved Failed with ",
      "status":false,
      "code":500    

      }
    );


  })
 
 });


 route.post('/login', async (req, res) => {

  const data_body=req.body;

  const {userid,password}=data_body;

  console.log(data_body);

  let out=await findtrains.find({})
 
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
      "message":"Saved Failed with ",
      "status":false,
      "code":500    

      }
    );


  })
 
 });

 route.get('/allusers', async (req, res) => {


  let out=await findtrains.find({})
 
  .then((result)=>{

    res.status("200").json(
      {
        "data":out,
      "message":"Data Fetch Successful",
      "status":true,
      "code":200    

      }
    );

  })
  .catch(err=>{

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
