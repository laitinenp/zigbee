module.exports = {
    
    name: 'outerTemperature',
    
    value: 12,
    
    min: -35,
    max: 40,
    
    frequency: 10000,        // in milliseconds. 6000 = 60x100 = 1 minute
    
    measure: function(callback) {
        this.value = Math.floor(Math.random() * 75) - 35
        callback(this.value)
    }
    

}

setInterval(function() {
    module.exports.measure(function(result) {
        console.log("MEASURE " + module.exports.name + ":" + result)
    })
}, module.exports.frequency)
