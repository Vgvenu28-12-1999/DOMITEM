
const express= require('express');
const bodyParse = require('body-parser');
const practice = express();
practice.use(bodyParse.urlencoded({extended: false}));


practice.use( '/add-product',(req,res,next)=>{
  
    res.send('<form action ="/product" method="POST"><input type="text" name="title" ><input type="number" number="size"><button type="submit"> Add product </button></form> ');

});
practice.post( '/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')

});
practice.use('/',(req,res,next)=>{
    
    res.send('<h1>Hello from express</h1>')
});

practice.listen(6005);



