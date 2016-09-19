
const express = require('express')
const bodyParser = require('body-parser')

const twio = require('./tw-io/tw-io.js')

const app = express()

express.static('public')

app.get('/api/sensor/temperature', function (req, res) {
  res.format({
    text: function() {
      res.send("1234")
    },
  
    html: function(){
      res.send("1234")
    },
  
    json: function(){
      res.send("{ \"temperature\" : \"1234\" }" )
    }
  })
})

app.get('/api/control/lights', function (req, res) {
  res.format({
    text: function() {
      res.send("off")
    },
  
    html: function(){
      res.send("false")
    },
  
    json: function(){
      res.send("{ \"lights\" : \"false\" }" )
    }
  })
})

app.put('/api/control/lights', function (req, res) {
  res.status(204).send("Not yet implemented")
})

app.listen(8888, function () {
  console.log('Example app listening on port 8888!');
});

setInterval(function() {
  twio.putProperty('TCAlpha', 'ContainerLevel', '55', function(result) {
    console.log("PUTTED: " + result)
  })
}, 5000)

