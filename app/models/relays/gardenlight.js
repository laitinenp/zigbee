
module.exports = {
    
    name: 'Garden',
    
    value: false,
    
    get: function(callback) {
        this.value = false
        callback(this.value)
    },
    
    put: function(newValue, callback) {
        console.log("PUT TODO GardenLight(" + newValue + "): Finish the relay control code and hardware here!!!");
        this.value = newValue;
        callback(false);            // no error
    }

}