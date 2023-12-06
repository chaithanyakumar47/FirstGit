const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');
const wrongRoutes = require('./routes/wrong');
app.use(bodyParser.urlencoded({extended : false}));

app.use(loginRoutes);
app.use(chatRoutes);
app.use(wrongRoutes);
//app.use('/admin',adminRoutes);
//app.use(shopRoutes);
// app.get('/', (req, res) => {
//     fs.readFile('username.txt', (err, data) => {
//         if(err) {
//             data = 'No chat Exists'
//         }
//         res.send(
//             `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
//             <input type="text" name="message" id="message">
//             <input type="hidden" name="username" id="username">
//             <br>
//             <button type="submit">Send</button>
//             </form>`
//         );
//     });
    
// });

// app.post('/', (req, res) => {
//     console.log(req.body.username);
//     console.log(req.body.message);
//     fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`,{flag: 'a'}, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.redirect("/");
//         }
//     });
// });

// app.get('/login',(req, res, next) => {
//     res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/"><input id="username" type="text" name="username"><button type="submit">add</button></form>');

// });

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>');
// });

app.listen(4000);
