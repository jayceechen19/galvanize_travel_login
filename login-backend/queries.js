const bcrypt = require('bcrypt')
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'jessicachen',
  host: 'localhost',
  database: 'login',
  port: 5432,
})

var registerUser = (req, res) =>{
    const body = req.body

    if (body.username && body.password){
        var passwordHash = bcrypt.hash(body.password, 10)
        pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [body.username, passwordHash], (error, results) =>{
            if(error){
                throw(error)
            }
            res.send('User created!')
        })
    }
}

var loginUser = (req, res) =>{
    const body = req.body
    if(body.username && body.password){
        pool.query('SELECT password FROM users WHERE username = $1', [body.username], (error, results)=>{
            var hash = results.rows
        })
    }
}
module.exports= {registerUser}