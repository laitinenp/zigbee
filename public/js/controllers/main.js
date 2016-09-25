	
const mainModule = angular.module('UsvaHomeApp', ['sensorsService', 'relaysService']);

mainModule.controller('sensorsController', ['$scope','$http','Sensors', function($scope, $http, Sensors) {

	$scope.loading = true;

	// GET =====================================================================
	// when landing on the page, get all sensors and show them
	// use the service to get all the todos
	Sensors.getAll()
		.success(function(data) {
			$scope.sensors = data;
			$scope.loading = false;
		});
		
	
	$scope.writeGauge = function(sensor) {
		$('.' + sensor.name).kumaGauge({
			value : sensor.value,
			min : sensor.min,
			max : sensor.max,
			showNeedle : false,
			valueLabel : {
				// show or hide this label
				display : true,
				// The font family of this label
				fontFamily : 'Arial',
				// The font color of this label
				fontColor : '#000',
				// Integer of The font size of this label (without px)
				fontSize : 20,
				// The font weight of this label
				fontWeight : 'normal'
			},

			label : {
		            display : true,
		            left : sensor.min.toString(),
		            right : sensor.max.toString(),
		            fontFamily : 'Helvetica',
		            fontColor : '#1E4147',
		            fontSize : '11',
		            fontWeight : 'bold'
		    },
			title : {
				display : true,
				value : sensor.name
			}
		});
	};
	
	$scope.activateGaugeRefresher = function() {
		var update = setInterval(function() {
			Sensors.getAll()
				.success(function(data) {
					$scope.sensors = data;
					$scope.loading = false;
					$scope.writeGauges();
				});
		}, 2000);
	};
	
	$scope.writeGauges = function() {
		$scope.sensors.forEach(function(sensor) {
			$('.' + sensor.name).kumaGauge({
				value : sensor.value,
				min : sensor.min,
				max : sensor.max,
			showNeedle : false,
			valueLabel : {
				// show or hide this label
				display : true,
				// The font family of this label
				fontFamily : 'Arial',
				// The font color of this label
				fontColor : '#000',
				// Integer of The font size of this label (without px)
				fontSize : 20,
				// The font weight of this label
				fontWeight : 'normal'
			},

			label : {
		            display : true,
		            left : sensor.min.toString(),
		            right : sensor.max.toString(),
		            fontFamily : 'Helvetica',
		            fontColor : '#1E4147',
		            fontSize : '11',
		            fontWeight : 'bold'
		    },
			title : {
				display : true,
				value : sensor.name
			}
			});
		});
	}

// this filter is needed for kumaGauge widget for generating each slot
}]).filter('generateGaugeDiv', function() {
	return function(name) {
		return '"js-gauge ' + name + ' gauge\"';
	}
});
		
		
mainModule.controller('relaysController', ['$scope','$http','Relays', function($scope, $http, Relays) {

	$scope.loading = true;
	
	// GET =====================================================================
	// when landing on the page, get all relays and show them
	// use the service to get all the todos
	Relays.getAll()
		.success(function(data) {
			$scope.relays = data;
			$scope.loading = false;
		});
	
	$scope.put = function(relayid, value) {
		    
        Relays.put(relayid, value);
		    
	};
	
}]);
