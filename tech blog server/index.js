const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.get('/', (req, res) => {
    
    res.send("heluw word ") 
})
app.post('/api',(req,res)=>{
    console.log(req.body);
    console.log("request is hitted ")
    res.send("hello")
    
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))