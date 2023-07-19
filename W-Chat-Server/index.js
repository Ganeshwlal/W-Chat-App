//import express
const express = require('express');
//import cors
const cors = require('cors')
//import dataservice
const dataService = require('./services/dataServices')
//create an application using express
const app = express();
//use json parser for server response
app.use(express.json())
//using cors, specify the origin to the server
app.use(cors({
    origin:['http://localhost:4200']
}))

//setup a port number
app.listen(3000,()=>{
    console.log('Listening on port 3000');
})

// register request 
app.post('/register',(req,res)=>{
    dataService.register(req.body.name, req.body.number, req.body.age, req.body.gender, req.body.password).then(
        result=>{
            console.log(result);
            res.status(result.statusCode).json(result)
            // console.log(res);
        }
    )
})


////login request

app.post('/login',(req,res)=>{
    dataService.login(req.body.number, req.body.password).then(

        result=>{
            // res.json(result)
      res.status(result.statusCode).json(result)
      }
    )
})

//add contact

app.post('/addcontact',(req,res)=>{
    dataService.addcontact(req.body.name, req.body.number, req.body.city).then(

        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//////



app.get('/getcontact',(req,res)=>{
    dataService.getcontact().then(

        result=>{
            res.status(result.statusCode).json(result)
        } 
    )
})


app.delete('/deleteContact/:name',(req,res)=>{
    dataService.deletecont(req.params.name).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.post('/editContact',(req,res)=>{

    dataService.editcontact(req.body.name,req.body.number,req.body.city).then(
        result=>{
            res.status(result.statusCode).json(result)
        }

    )

})











