const apiKey = "6d7fa8bbc9d11323a4360290364f544d";
const apiUrl = "api.openweathermap.org/data/2.5/we...";

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
const location = locationInput.value;
if (location) {
fetchWeather(location);
}
});

function fetchWeather(location) {

fetch(url)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}


