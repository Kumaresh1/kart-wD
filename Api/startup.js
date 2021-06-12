const express = require('express');
const mongoose = require('mongoose');
const startupdb = require('../DB/startupDB');
const route = express.Router();
const bcrypt=require('bcrypt')

route.post('/save', async (req, res) => {

  const data_body=req.body;

  console.log(data_body);

  let newstartup = new startupdb(data_body);
  await newstartup.save()
  .then((result)=>{

    res.status("201").json(
      {
        "data":data_body,
      "message":"Saved success for "+data_body.startup_name,
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



 route.get('/alldata', async (req, res) => {

  
  await startupdb.find({})
 
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
