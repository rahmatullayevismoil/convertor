var elForm = document.getElementById("form");
var elInputDistance = document.getElementById("inputDistance");
var elWalk = document.getElementById("walk");
var elBike = document.getElementById("bike");
var elCar = document.getElementById("car");
var elPlane = document.getElementById("plane");

var walkSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

function calculateDistance(distance, speed) {
    var hours = Math.floor(distance / speed);
    var minuts = Math.floor((distance / speed - hours) * 60);
    var seconds = Math.ceil(((distance / speed - hours) * 60 - minuts) * 60);
    
    var minutjon = minuts? `${minuts} minut` : "" ;
    var secundjon = seconds? `${seconds} secund` : "" ;

    if (hours === 0 && minuts === 0) {
        return `${minutjon} ${secundjon}`
    } else if(hours === 0) {
        return `${minutjon} ${secundjon}`
    } else {
        return `${hours} soat ${minutjon} ${secundjon}`
    }


}

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var inputDistance = Number(elInputDistance.value.trim());

    if (inputDistance <= 0) {
        alert("Nuldan katta raqam kiriting");
        return console.log("Nuldan katta raqam kiriting");
    } else if (isNaN(inputDistance)) {
        alert("Raqam kiriting");
        return console.log("Raqam kiriting");
    }
    
    elWalk.textContent = calculateDistance(inputDistance,walkSpeed  );
    elBike.textContent = calculateDistance(inputDistance,bikeSpeed);
    elCar.textContent = calculateDistance(inputDistance, carSpeed);
    elPlane.textContent = calculateDistance(inputDistance, planeSpeed);
})


