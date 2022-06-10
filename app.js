// 1. How to install packege in (app.js) file.
//      code here :-  npm init -y   ( install packege.json )
//                    npm i mysql   (install packege-lock.json and mysql)
//                    ((npm i -D nodemon) or (npm i nodemon --save-dev)) // nodemon save autometecly devDependencies key in (pachege.json) file.

// 2. Go to the pachege.json file and type ( "start":"nodemon" )in scripts key
//      "scripts": {
//          "test": "echo \"Error: no test specified\" && exit 1",
//          "start":"nodemon"   // run js file with npm start
//        }

// 3. how to run js file.
//      a)  npm start
//      b)  node (js file name)


// first of all install snap :- sudo apt install snapd  
// install postman :- sudo snap install postman (or) manually install 

// setup postman :- choose 1) body 2) row 3) formate :- json 

// method :- post method => use to signup 
// method :- get method => use to login and show data on postman 
// method :- delete method => use to delete user data
// method :- put method => use to update user data

// install killall
// when crash port number. that we use command :- (killall node -9) run command on terminal 

const express = require("express"); // require express here 
const App = express();  // use express and store in a variable
const port = 6000       // which port number you want run 
const d = require('./data/project.js')  // import conection here from (folder :-data and file:- project.js)

App.use(express.json()) // here use express in json formate 

App.post('/signup', async(req, res) => {
    // here is the signup query with id, name, city, state, pin_code
    d.query(`insert into user(id ,name , city , state , pin_code) values(${req.body.id},'${req.body.name}','${req.body.city}','${req.body.state}','${req.body.pin_code}')`, (err, data) => {
        if(err) {
            res.send(err.message)
        }
        else {
            res.send('Data created and sent to the Database.')
            console.log(data);  // show user data of postman in terminal
        }
    })
})
App.get('/login/:id',(req, res)=>{
    // which id you want 
    // here logn with id query
    d.query(`select * from user where id=${Number(req.params.id)}`,(err,data)=>{
        if(err) {
            res.send(err)
        }
        else{
            // res.send('login user...')
            res.send(data)  // user data show on postman 
            console.log(data);  // show data of postman in terminal
        }
    })
})
App.put('/update/:id',(req,res)=>{
    // Which column do you want to update with the unique ID?
    //  On Postman choose put method and what data do you want to update?
    // here is the update query
    d.query(`update user set name='${req.body.name}' ,state='${req.body.state}', city='${req.body.city}', pin_code='${req.body.pin_code}' where id=${Number(req.params.id)}`,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send('update successfully...')
        }
    })
})
App.delete('/delete/:id',(req,res)=>{            // console.log(data);
    // which user data you want deleted with unique id 
    // here is the delete query
    d.query(`delete from user where id=${Number(req.params.id)}`,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send('data deleted...')
        }
    })
})
App.get('/show_all_data',(req,res)=>{
    // show all data on postman
    // here is the show all data query .
    d.query(`select*from user `,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)  // show user data on postman 
            // console.log(data); // show data of postman in terminal
        }
    })
})
App.get('/Which_one_datafind/:id',(req,res)=>{
    // only one data show on postman. which you want do you ?
    // Which id show do you want to do here? query here .
    d.query(`select*from user where id=${Number(req.params.id)}`,(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)  // show user data on postman 
            console.log(data); // show user data of postman in terminal
        }
    })
})
App.listen(port, () => {
    console.log("done!!!!!!1")
})

