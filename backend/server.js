const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const cors = require('cors')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'theka_coffee'
});


app.use(cors());
app.use(express.json());
// connection.connect()




// app.get('/', (req, res) => {
  //   res.send('Hello World!')
  // })
  
  
  app.get('/api',(req,res)=>{
    return res.json({message:"Connected...."})
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })
  // connection.end()
  