
const express = require('express')
const app = express()
const port = 3000
 
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hong's World")
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q)
    res.send({'userid':q.b})
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name=='dog') {
        res.json({'sound':'멍멍'})
    } else if(name=='cat') {
        res.json({'sound':'냐옹'})
    } else if(name=='pig') {
        res.json({'sound':'꿀꿀'})
    } else {
        res.json({'sound':'알수없음'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// setTimeout(()=>{console.log('5지남')},5000)