const express = require('express')
database = 'test'
collections = ['test']
const mongojs = require('mongojs')
const bodyParser = require('body-parser')
const users = require('./users')
const db = mongojs('mongo/' + database, collections,)
const app = express()
app.use(bodyParser.json())

//insert frist time
app.get('/', (req, res) => {
    db.collection('test').count((err, result) => {
        if(result <= 0) {
            db.collection('test').insert(users.findAll(), (err, r) => {
                if(err) {
                    res.json({msn: 'err'})
                }else {
                    res.json({msn: 'success'})
                }
            })
        }else {
            res.send('Hello Nodejs + Express + RESfullAPI + MongoDB')
        }
    })
})

//select All
app.get('/getall', (req, res) => {
    db.collection('test').find((err, r) => {
        res.json(r)
    })
})

//select By id
app.get('/getbyid/:id', (req, res) => {
    const id = Number(req.params.id)
    db.collection('test').findOne({id: id}, (err, r) => {
        res.json(r)
    })
})

//insert
app.post('/add', (req, res) => {
    const json = req.body
    db.collection('test').findOne({id: json.id}, (err, r) => {
        if(r) {
            res.send({msn: 'err'})
        }else {
            db.collection('test').insert(json, (err, r) => {
                if(err) {
                    res.send({msn: 'err'})
                }else {
                    res.send({msn: 'success'});
                }
            })
        }
    })
})

//update
app.put('/update/:id', (req, res) => {
    const id = Number(req.params.id)
    const json = req.body
    db.collection('test').findOne({id: id}, (err, r) => {
        if(r === null) {
            res.json({msn: 'err'})
        }else {
            const myquery = {id: id }
            const newvalues = { $set: { username: json.username, name: json.name, position: json.position, office: json.office, extn: json.extn, startdate: json.startdate, salary: json.salary } }
            db.collection('test').update(myquery, newvalues, (err, result) => {
                if(result) {
                    res.json({msn: 'success'})
                }else {
                    res.json({msn: 'err'})
                }
            })
        }
    })
})

//delete
app.delete('/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    db.collection('test').findOne({id: id}, (err, r) => {
        if(r === null) {
            res.json({msn: 'err'})
        }else {
            db.collection('test').remove({id: id}, (err, result) => {
                if(result) {
                    res.json({msn: 'success'})
                }
            })
        }
    })
})

app.listen(3000,() => {
    console.log('Example app listening on port 3000!')
})
