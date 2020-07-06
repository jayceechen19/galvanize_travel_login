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
        pool.query(`INSERT INTO users (username, password) VALUES ($1, crypt($2, gen_salt('md5'))`, [body.username, body.password], (error, results) =>{
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
        pool.query(`SELECT username FROM users WHERE username = $1 AND password = crypt($2, password)`, 
        [body.username, body.password], (error, results)=>{
            if(error){
                res.send('Invalid credentials')
            }else{
                var result = results.rows[0].username
                res.send(`${result} successfully logged in!`)
            }
        })
    }else{
        res.send('Field missing')
    }
}
module.exports= {registerUser, loginUser}