const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;


app.use(cors());



const categories = require('./data/Categories.json')


app.get('/' , (req , res) =>{
    res.send('news api running')
})

app.get('/news-categories' , (req , res) =>{
    res.send(categories)
})

app.listen(port , () => {
    console.log('dragon news:' , port)
})