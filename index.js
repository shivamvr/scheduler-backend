

const express = require('express')
const {contactRouter} = require('./routes/contact.Routes')
const {postRouter} = require('./routes/post.Routes')
const cors = require('cors')
const {connection} = require('./db')

const app = express()
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).send({"msg":"this is the homepage"})
})


app.use('/contact',contactRouter)
app.use('/posts',postRouter)

app.listen(8080, async()=>{
     try{
         await connection
         console.log('Connected to DB')
         console.log('Server is running at port 8080')
     }catch(err){
        console.log("Error:",err)
     }
})