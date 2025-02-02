const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    
    res.send("heluw word ") 
})
app.post('/submit',(req,res)=>{
    console.log("request is hitted ")
    res.send("you are goddamn right")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))