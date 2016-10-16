// load modules
const bone = require('bonescript');
const relayid = "P9_11";

// initialize the relay port as output
bone.pinMode( relayid, bone.OUTPUT );

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
	var state;
	if (this.value == true) state = bone.HIGH;
	else state = bone.LOW;
	bone.digitalWrite( relayid, state );
        callback(false);            // no error
    }

}
