mapboxgl.accessToken =
  "pk.eyJ1IjoiZGV2bjE2IiwiYSI6ImNsaWQ3NWN4cTBwajgzbW1vdjJ4dDViOXQifQ.M9tWvv_BF_0I8DcL84gl5w";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [78.9629, 20.5937], // Co-ordinates of India
  zoom: 3,
});

// Get the city select element
var citySelect = document.getElementById("cities");

// Add event listener for the change event
citySelect.addEventListener("change", function () {
  var selectedCity = citySelect.value;
  var searchbar = document.getElementById("search-bar");
  searchbar.value = selectedCity;
  // Check if a city is selected
  if (selectedCity) {
    // Get the coordinates for the selected city
    var cityCoordinates = getCoordinates(selectedCity);

    // Zoom in on the selected city
    map.flyTo({
      center: cityCoordinates,
      zoom: 12,
      speed: 1.3,
      essential: true,
    });
  }
});

// Function to get the coordinates for a city
function getCoordinates(city) {
  // Define the coordinates for each city
  var cityCoordinates = {
    Delhi: [77.1025, 28.7041],
    Mumbai: [72.8777, 19.076],
    Kolkata: [88.3639, 22.5726],
    Chennai: [80.2707, 13.0827],
    Bengaluru: [77.5946, 12.9716],
  };

  // Return the coordinates for the selected city
  return cityCoordinates[city];
}
