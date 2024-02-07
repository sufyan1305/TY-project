const express = require('express')
const app = express()
const port = 8081
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const salt = 10;

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'theka_coffee'
});

app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());


// app.use((req,res,next)=>{
//   res.setHeader("dashboard","/dashboard")
// })
// con.connect()
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ Error: "You are not authorized..." })

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.json({ Error: "Invalid token" })

    req.User_Id = decoded.User_Id;
    next()
  })
}
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/',()={

// })

app.get('/api', (req, res) => {
  return res.json({ message: "Connected...." })
})

//sign up
app.post('/demo', (req, res) => {
  const sql = "INSERT INTO `users` (`User_id`, `Password`, `First_Name`, `Last_Name`, `Email`, `Mobile_number`, `User_type`, `Date`) VALUES (?, ?, '', '', '', '', '', current_timestamp()) ";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {

    if (err) return res.json({ Error: "Cannot hashed password..." })

    const values = [
      req.body.username,
      hash
    ]

    con.query(sql, values, (err, result) => {
      if (err) return res.json({ Error: "Cannot insert data..." })

      return res.json({ Status: "Success" })
    })
  })

})

//login
app.post('/', (req, res) => {
  
  const sql = "SELECT * FROM users where User_id = ?";
  con.query(sql, [req.body.username], (err, result) => {
    if (err) return res.json({ Error: "Login internal server error..." })

    if (result.length > 0) {
      bcrypt.compare(req.body.password.toString(), result[0].Password, (err, response) => {
        if (err) return res.json({ Error: "Invalid password..." })

        if (response) {
          const token = jwt.sign({ 'username': result[0].User_Id }, process.env.SECRET_KEY, { expiresIn: '10h' })
         
          res.cookie('token', token)
          // res.append(Path2D = "")
          // window.localStorage.setItem("loggedIn", "true")
          return res.json({ Status: "Success" })
        }
        else {
          return res.json({ Error: "Password didn't match..." })

        }
      })
    }
    else {
      return res.json({ Error: "Invald username..." })
    }
  })
})

// app.post('/logout',verifyUser,(req,res)=>{
//     res.clearCookie('token');
//     res.end()
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost/${port}`);
})


// connection.end()
