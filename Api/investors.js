const express = require('express');
const mongoose = require('mongoose');
const startupdb = require('../DB/investor');
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
      "message":"Saved success for "+data_body.about,
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

  
  let datacon=req.query;
  var searchquery;
    if(datacon.userid==null){
  searchquery={}
    }
    else{
      searchquery={userid: { $ne:datacon.userid  }}
    }
  
    await startupdb.find(datacon)
   
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


 route.get('/search', async (req, res) => {

  console.log(req.query);
  let dataq=req.query;
  await startupdb.find(dataq)
 
  .then((result)=>{


    if(result.length==0){

      res.status("400").json(
        {
          "data":{id:dataq.id},
        "message":"No data Found",
        "status":true,
        "code":400    
  
        }
      );


    }
else
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


 route.post('/update',async (req,res)=>{

  datain=req.body;
  const id=datain._id || datain.id;
console.log(id)



 await startupdb.updateOne({_id:id},datain)
 .then(result=>{

  if(result.nModified>=1){

    return    res.json({
          data:datain,
          status:true,
          code:200,
          message:"Update Sucessfull"
        })
      
      
      }else{
     return   res.json({
          data:datain,
          status:true,
          code:200,
          message:"Data is up to date"
        })
      
      
      }
     


 })
 .catch(err=>{

  res.json({
    data:req.query,
    status:false,
    code:404,
    message:"No Data found"
  })



 })


 });




module.exports = route;
