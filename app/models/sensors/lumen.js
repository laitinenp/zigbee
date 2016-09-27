module.exports = {
    
    name: 'Illumination',
    
    value: 22,
    unit: "lux",
    
    lowerLimit: 0,
    upperLimit: 32000,
    precision: 10,
    
    frequency: 10000,        // in milliseconds. 10000 = 100x100 = 1 minute
    
    ranges: [
        {
            min: 0,
            max: 300,
            color: '#DEDEDE'
        },
        {
            min: 300,
            max: 25000,
            color: '#8DCA2F'
        },
        {
            min: 25000,
            max: 32000,
            color: '#FF7700'
        }
    ],
    
    measure: function(callback) {
        this.value = Math.floor(Math.random() * 32000);
        callback(this.value)
    }

}
        
setInterval(function() {
    module.exports.measure(function(result) {
        console.log("MEASURE " + module.exports.name + ":" + result)
    })
}, module.exports.frequency)