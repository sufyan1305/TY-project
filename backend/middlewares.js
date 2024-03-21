// const salt = 10;
// const bcrypt = require('bcrypt')

//sign up
// app.post('/demo', (req, res) => {
//   const sql = "INSERT INTO `users` (`User_id`, `Password`, `First_Name`, `Last_Name`, `Email`, `Mobile_number`, `User_type`, `Date`) VALUES (?, ?, '', '', '', '', '', current_timestamp()) ";

//   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {

//     if (err) return res.json({ Error: "Cannot hashed password..." })

//     const values = [
//       req.body.username,
//       hash
//     ]

//     con.query(sql, values, (err, result) => {
//       if (err) return res.json({ Error: "Cannot insert data..." })

//       return res.json({ Status: "Success" })
//     })
//   })

// })

//login
// app.post('/', (req, res) => {
//   const sql = "SELECT * FROM users where User_id = ?";
//   con.query(sql, [req.body.username], (err, result) => {
//     if (err) return res.json({ Error: "Login internal server error..." })

//     if (result.length > 0) {
//       bcrypt.compare(req.body.password.toString(), result[0].Password, (err, response) => {
//         if (err) return res.json({ Error: "Invalid password..." })

//         if (response) {
//           const token = jwt.sign({ username: result[0].User_id }, process.env.SECRET_KEY, { expiresIn: '10h' })

//           res.cookie('token', token)
// res.append(Path2D = "")
// window.localStorage.setItem("loggedIn", "true")
//           return res.json({ Status: "Success" })
//         }
//         else {
//           return res.json({ Error: "Password didn't match..." })

//         }
//       })
//     }
//     else {
//       return res.json({ Error: "Invald username..." })
//     }
//   })
// })