const express=require('express');
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(express.static('public'));
app.set('view engine','ejs')
app.post('/submit', (req, res,) => {
    try {
      
        const { name, email } = req.body;
        console.log(`Name: ${name}, Email: ${email}`);
        res.render('index', { name, email });
    } catch (error) {
        console.log(error);
        
    }
});

app.listen(5000,()=>{
    console.log("server is listing on http://127.0.0.1:5000");
    
})