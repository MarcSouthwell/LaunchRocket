//dropdown
var dropdown = function (){
	var currentClassName = document.getElementById('dropdown').className;

	if (currentClassName == 'dropdown') {
		document.getElementById('dropdown').className = 'dropdown up';
	} else {
		document.getElementById('dropdown').className = 'dropdown';
	}
}



//change background color
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}

}


		var car = {
			make: 'VW',
			type: 'Polo',
			color: 'Blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['set 1', 'seat 2', 'seat 3', 'seat 4'],
			turnOn: function (){
				this.isTurnedOn = true;
			},
			fly: function(){
				alert('fly');
			},
			switchCar: function(isOn){
				console.log('turn car '+isOn);
				if (isOn == true){
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};

		console.log('Hello there friends');
	