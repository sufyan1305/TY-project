const express = require('express')
const app = express()
const port = 8081
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config()

//db connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'theka_coffee',
  multipleStatements: true
});

app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ Error: "You are not authorized..." })

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.json({ Error: "Invalid token" })
    req.User_id = decoded.User_id;
    next()
  })
}

app.get('/api', (req, res) => {
  return res.json({ message: "Connected...." })
})

//for adding user via form with encrypted password
app.post('/demo', (req, res) => {
  const saltRounds = 10; // Define the number of salt rounds
  bcrypt.genSalt(saltRounds, (err, salt) => { // Generate salt using bcryptjs
    if (err) return res.json({ Error: "Cannot generate salt..." });

    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => { // Hash password using bcryptjs
      if (err) return res.json({ Error: "Cannot hash password..." });

      const sql = "INSERT INTO `users` (`User_id`, `Password`, `First_Name`, `Last_Name`, `Email`, `Mobile_number`, `User_type`, `Date`) VALUES (?, ?, '', '', '', '', '', current_timestamp()) ";
      const values = [
        req.body.username,
        hash
      ];

      con.query(sql, values, (err, result) => {
        if (err) return res.json({ Error: "Cannot insert data..." });

        return res.json({ Status: "Success" });
      });
    });
  });
});

app.post('/', (req, res) => {
  const sql = "SELECT * FROM users where User_id = ?";
  con.query(sql, [req.body.username], (err, result) => {
    if (err) return res.json({ Error: "Login internal server error..." })

    if (result.length > 0) {
      bcrypt.compare(req.body.password.toString(), result[0].Password, (err, response) => { // Using bcryptjs.compare instead of bcrypt.compare
        if (err) return res.json({ Error: "Invalid password..." })

        if (response) {
          const token = jwt.sign({ username: result[0].User_id }, process.env.SECRET_KEY, { expiresIn: '10h' })

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
      return res.json({ Error: "Invalid username..." })
    }
  })
})

//forgot password
app.post("/forgot", (req, res) => {
  const username = req.body.username;
  const sql = "SELECT * FROM users where User_id = ?";
  con.query(sql, [username], (err, result) => {
    if (err) return res.json({ Error: "Internal Server Error" })

    if (result.length === 0) {
      return res.json({ message: "User not found" })
    }

    const user = result[0].User_id;

    // res.cookie('username', user);
    res.json({ message: 'Password reset link sent', });
    // const token  = jwt.sign({userId:user},process.env.SECRET_KEY,{expiresIn:'10h'});
  })
})

//set new password
app.post("/newpass", (req, res) => {
  // const username = req.name;
  const pass = req.body.password;
  const conpass = req.body.conpassword;
  console.log(pass + " " + conpass);
  // const { token, password, conpassword } = req.body;
  const username = req.body.username;
  console.log(username);
  // con.query(sql, username, (err, result) => {
  if (pass === conpass) {
    const saltRounds = 10; // Define the number of salt rounds
    bcrypt.genSalt(saltRounds, (err, salt) => { // Generate salt using bcryptjs
      if (err) return res.json({ Error: "Cannot generate salt..." });

      bcrypt.hash(pass.toString(), salt, (err, hash) => { // Hash password using bcryptjs
        if (err) return res.json({ Error: "Cannot hash password..." });

        const values = [
          hash,
          username
        ];

        con.query("UPDATE `users` SET `Password` = ? WHERE `User_id` = ?", values, (err, result) => {

          if (err) return res.json({ Error: "Cannot insert data..." });

          console.log("query executed");
          return res.json({ Status: "Success" });
        });
      });
    });
  }
  else {
    return res.json({ Error: "Password doesn't matched with each other" })
  }
  // })
})

//add-user
let userTypeCounts = {};
app.post("/add-user", (req, res) => {
  const generateUsername = (userType) => {
    let abbreviation = '';

    // Determine the abbreviation based on the user type
    switch (userType.toLowerCase()) {
      case 'center warehouse manager':
        abbreviation = 'cwm';
        break;
      case 'sub warehouse manager':
        abbreviation = 'subwm';
        break;
      case 'outlet manager':
        abbreviation = 'otm';
        break;
      default:
        abbreviation = userType.charAt(0).toUpperCase();
    }
    // Initialize count if it doesn't exist
    if (!userTypeCounts[abbreviation]) {
      userTypeCounts[abbreviation] = 1;
    }

    // Generate the username
    let username = abbreviation + userTypeCounts[abbreviation];

    // Increment the count for the user type
    userTypeCounts[abbreviation]++;

    // return username;
    return username.toUpperCase();
  }

  const saltRounds = 10; // Define the number of salt rounds
  bcrypt.genSalt(saltRounds, (err, salt) => { // Generate salt using bcryptjs
    if (err) return res.json({ Error: "Cannot generate salt..." });

    bcrypt.hash("123", salt, (err, hash) => { // Hash password using bcryptjs
      if (err) return res.json({ Error: "Cannot hash password..." });

      const sql = "INSERT INTO `users` (`User_id`, `Password`, `First_Name`, `Last_Name`, `Email`, `Mobile_number`, `User_type`, `Date`) VALUES (?, ?, ?, ?, ?, ?, ?, current_timestamp()) ";
      const values = [
        generateUsername(req.body.position),
        hash,
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.mobilenumber,
        req.body.position,
      ];

      con.query(sql, values, (err, result) => {
        if (err) return res.json({ Error: "Cannot insert data..." });

        return res.json({ Status: "Success" });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost/${port}`);
});
