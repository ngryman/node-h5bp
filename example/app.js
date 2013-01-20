
var h5bp = require('../lib/h5bp')
  , app = h5bp.createServer({ server: 'express' })

app.get('/hello-world', helloWorld)

function helloWorld(req, res, next) {
  res.send('hello world')
}

app.listen(3000)
