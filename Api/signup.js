const express = require('express');
const mongoose = require('mongoose');
const userdb = require('../DB/signupDB');
const startupdb = require('../DB/startupDB');
const investordb = require('../DB/investor');
const govtorgdb = require('../DB/GovtOrgDB');
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
      "message":"Saved success for "+data_body.name,
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

  const data_body=req.query;

  const {email,password}=data_body;

  // console.log(data_body);

  await userdb.findOne({email:email})
 
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
      
      bcrypt.compare(password, result.password, function(err, bres) {

        if (err) throw err;
        
        if(bres==true){

          res.status("200").json(
            {
              "data":result,
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

 route.get('/allusers', async (req, res) => {

  let datacon=req.query;

  if(datacon.name!="" || datacon.name!=undefined){

    var regex = new RegExp(datacon.name);

    datacon.name={ '$regex' : regex}
   

  }


console.log(regex)

  await userdb.find(datacon)
 
  .then((result)=>{


    if(result.length==0){

      res.status("500").json(
        {
          "data":err,
        "message":"Get data Failed ",
        "status":false,
        "code":500    
  
        }
      );

    }
else{
    res.status("200").json(
      {
        "data":result,
      "message":"Data Fetch Successful ",
      "status":true,
      "code":200    

      }
    );}

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


 route.get('/check',async (req,res)=>{

  const {user_id,user_type}=req.query;

  datacon=req.query;
  console.log(datacon);

  if(user_type=="Startup" ||user_type=="startup"){

  await  startupdb.find({userid:user_id})
    .then(result=>{ 

      if(result.length==0){

        res.status("404").json({
          data:false,
          status:false,
          code:404,
          message:"No Data found"
        })


      }
      else{

        res.json({
          data:true,
          status:true,
          code:200,
          message:"Data found"
        })
      }
      
      
    })
    .catch(err=>{

      res.status("404").json({
        data:false,
        status:false,
        code:404,
        message:"No Data found"
      })

    })

  }
else if(user_type=="investor" ||user_type=="Investor"){

investordb.find({userid:user_id})
  .then(result=>{ 
   
    
    if(result.length==0){

      res.status("404").json({
        data:false,
        status:false,
        code:404,
        message:"No data found"
      })


    }
    else{

      res.json({
        data:true,
        status:true,
        code:200,
        message:"Data found"
      })
    }
   

   
  })
  .catch(err=>{

    res.status("404").json({
      data:false,
      status:false,
      code:404,
      message:"No data found"
    })

  })



}
else if(user_type=="government" ||user_type=="Government"){

govtorgdb.find({userid:user_id})
  .then(result=>{ 
   
    if(result.length==0){

      res.status("404").json({
        data:false,
        status:false,
        code:404,
        message:"No data found"
      })


    }
    else{

      res.json({
        data:true,
        status:true,
        code:200,
        message:"Data found"
      })
    }
   

   
  })
  .catch(err=>{

    res.status("404").json({
      data:false,
      status:false,
      code:404,
      message:"No Data found"
    })

  })




}

else {

  userdb.find({userid:user_id})
    .then(result=>{ 
     
      
      if(result.length==0){
  
        res.status("404").json({
          data:false,
          status:false,
          code:404,
          message:"No data found"
        })
  
  
      }
      else{
  
        res.json({
          data:true,
          status:true,
          code:200,
          message:"Data found"
        })
      }
     
  
     
    })
    .catch(err=>{
  
      res.status("404").json({
        data:false,
        status:false,
        code:404,
        message:"No data found"
      })
  
    })
  
  
  
  }
  





 });


 route.post('/update',async (req,res)=>{

  datain=req.body;
const id=datain._id || datain.id;

console.log(id)



 await userdb.updateOne({_id:id},datain)
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
