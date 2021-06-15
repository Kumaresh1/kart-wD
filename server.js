const express = require('express');
const connectDB = require('./DB/connect');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

//app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs')

try{
app.use('/user', require('./Api/signup'));
app.use('/startup', require('./Api/startup'));


app.use('/investor', require('./Api/investors'));
app.use('/news', require('./Api/news'));

app.use('/govtorg', require('./Api/govtorg'));

}catch(err){

    console.log("err");
    res.send(err);
}

app.get('/',(req,res)=>
{
    res.render('index')
})

const Port = process.env.PORT || 3000;

app.listen(Port, () => console.log('Server started at '+Port));
