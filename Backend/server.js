
const express = require('express');

const PORT = 3000; 
const app = express();

app.use(express.json());


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

// Add a new user
app.post('/post', (req, res) => {
    try {
        const { username, age, email } = req.body;

        if (!username || !age || !email) {
            return res.status(400).json({ "Message": "Enter all the details" });
        }

        if (typeof age !== 'number' || age <= 0) {
            return res.status(400).json({ "Message": "Invalid age" });
        }

        const newUser = { username, age, email };
        users.push(newUser);

        return res.status(201).json({ "Message": "User Added", "User": newUser });
    } catch (error) {
        return res.status(500).json({ "message": "Not Added", "error": error.message });
    }
});

// Get all users
app.get('/', (req, res) => {
    try {
        return res.status(200).json({ "Message": "User Found", "Data": users });
    } catch (error) {
        return res.status(500).json({ "message": "User not Found", "error": error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Hi my name Kartikay Rattan and The Server is running on http://localhost:${PORT}`);
});