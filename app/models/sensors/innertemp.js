module.exports = {
    
    name: 'innerTemperature',
    
    value: 22,
    
    min: -20,
    max: 30,
    
    frequency: 10000,        // in milliseconds. 6000 = 60x100 = 1 minute
    
    measure: function(callback) {
        this.value = 19
        callback(this.value)
    }

}

setInterval(function() {
    module.exports.measure(function(result) {
        console.log("MEASURE " + module.exports.name + ":" + result)
    })
}, module.exports.frequency)