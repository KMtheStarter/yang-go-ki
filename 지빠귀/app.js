const express = require('express');
const app = express();

let users = [
    {
        "left_F": "50",
        "right_F": "100",
        "degree": "5"
    }
]

app.get('/', (req, res) => {
    console.log('main page /');
    res.send("hello<br>hello");
})
app.get('/users', (req, res) => {
    console.log('who get in here/users');
    res.json(users);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});