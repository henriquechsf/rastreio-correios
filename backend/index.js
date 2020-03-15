const express = require('express')
const cors = require('cors')
const trackingCorreios = require('tracking-correios')
const app = express()

// expor acesso à API
app.use(cors())

const PORT = 3001

app.get('/', (req, res) => {

    const {
        tracking
    } = req.query;

    trackingCorreios.track(tracking)
        .then((result) => {
            res.json({
                message: 'Ok',
                tracking,
                result
            })
        })
        .catch((error) => {
            res.json({
                message: 'Error',
                error
            })
        })

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})