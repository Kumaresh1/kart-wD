const jwt = require('jsonwebtoken');
const database = require('../services/mongodb');
const { AUTHSECRET} = require('../config/secrets');
const { TOKENEXPIRE } = require('../util/constants')

exports.AuthManager = function (req, res, next) {

    
    // const authHeader = req.headers['authorization'];
    // if (authHeader == null) return res.status(401).json({
    //     error: 'Forbidded',
    //     message: 'Token Not Found'
    // });
    // const token = authHeader.split(' ')[1];
    // if (token == null) return res.status(401).json({
    //     error: 'Forbidded',
    //     message: 'Token Not Found'
    // });
    // var SECRET = AUTHSECRET;

    // jwt.verify(token, SECRET, async (err, result) => {
    //     if (err) return res.status(401).json({
    //         error: "Unauthorized",
    //         message: err.message,
    //     });

    //     //fetching the user from database for further use 
    //     await database.readUserByIds(result.id, type).then((userdata) => {
    //         if(!userdata||userdata.length==0){ 
    //             throw "Read Error";
    //         }   
    //         req.user = userdata[0];
    //         //console.log("Requesting Data for " + req.user.email + " Type " + type);
    //         next();
    //     }).catch((err) => {
    //         console.log(err);
    //         res.status(401).json({
    //             error: "Issue while reading the user from database or inappropriate token passed"
    //         });
    //     });
    // }).catch((err) => {
    //     console.log(err);
    //     res.status(401).json({
    //         error: "Token signature does not match"
    //     });
    // });


}

