function setLocation(city) {
    var country = "France";

    function printLocation() {
        console.log("You are in " + city + ", " + country);
    }

    return printLocation;
}

var currentLocation = setLocation ("Paris");

currentLocation();   // output: You are in Paris, France