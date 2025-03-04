const express = require('express');
const PORT = 3000 ;

const app = express();

const users = [
    {
        username : "alice", age: 25 , email : "alice@example.com"
    },
    {
        username : "bob" , age : 30 , email : "bob@example.com"
    },
    {
        username : "charlie" , age : 28 , email : "charlie@example.com"
    }
]

app.get("/",(req,res)=>{
    res.json("User found" , {users})
})

app.listen(PORT,(req,res)=>{
    console.log(`Hi my name is kartikay rattan . The server is running on http://localhost:${PORT}`)
})