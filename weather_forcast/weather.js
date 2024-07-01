//getting all the elments
const searchInput = document.getElementById("search");
const searchForm = document.getElementById("search-form");
const temperatureDisplay = document.getElementById("temperature");
const humidityDisplay = document.getElementById("humidity");
const windSpeedDisplay = document.getElementById("wind-speed");
const weatherDisplay = document.getElementById("weather");
const temperatureLoading = document.getElementById("temperature-loading");
const humidityLoading = document.getElementById("humidity-loading");
const windSpeedLoading = document.getElementById("wind-speed-loading");
const weatherLoading = document.getElementById("weather-loading");
const cityNameHeader = document.getElementById("city-name-header");
const weatherImage = document.getElementById("weather-image");

document.addEventListener("DOMContentLoaded", function () {  

    const fetchWeather = async (location) => {
        try {
            temperatureDisplay.textContent = ""; // Clear previous content
            humidityDisplay.textContent = "";
            windSpeedDisplay.textContent = "";
            weatherDisplay.textContent = "";

            temperatureLoading.style.display = "block"; // Display loading indicators
            humidityLoading.style.display = "block";
            windSpeedLoading.style.display = "block";
            weatherLoading.style.display = "block";

            // const apiKey = 'your token" ;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
            let response = await fetch(url);
            let data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "City not found");
            }

            temperatureLoading.style.display = "none"; // Hide loading indicators
            humidityLoading.style.display = "none";
            windSpeedLoading.style.display = "none";
            weatherLoading.style.display = "none";

            temperatureDisplay.textContent = data.main.temp + "°C";
            humidityDisplay.textContent = data.main.humidity + "%";
            windSpeedDisplay.textContent = data.wind.speed + " km/h";
            weatherDisplay.textContent = `${data.weather[0].main} in ${data.name}`;
            cityNameHeader.textContent = `Weather Dashboard for ${data.name}`;

            // Update weather image 
            updateWeatherImage(data.weather[0].main);
            console.log("Weather data fetched successfully:", data);

        } catch (error) {
            console.error("Error fetching weather data:", error);
            temperatureLoading.style.display = "none"; // Hide loading indicators
            humidityLoading.style.display = "none";
            windSpeedLoading.style.display = "none";
            weatherLoading.style.display = "none";

            temperatureDisplay.textContent = "N/A";
            humidityDisplay.textContent = "N/A";
            windSpeedDisplay.textContent = "N/A";
            weatherDisplay.textContent = "N/A";
            cityNameHeader.textContent = `Weather Dashboard`;

            alert("Failed to fetch weather data. Please enter a valid city name.");
        }
    };

    // Function to update weather image based on weather condition
    const updateWeatherImage = (weatherCondition) => {
        const imageMappings = {
            "Clear": "images/sunny.jpg",
            "Clouds": "images/cloudy.jpg",
            "Rain": "images/rain.jpg",
            "Drizzle": "images/rain.jpg",
            "Thunderstorm": "images/thunder.jpg",
            "Mist": "images/fog(2).jpg",
            "Fog": "images/fog(2).jpg",
            "Smoke": "images/smoke.jpg",
            "Haze": "images/haze.jpg",
            "Dust": "images/dust.jpg",
            
        };
 
        const imageUrl = imageMappings[weatherCondition];
        if (imageUrl) {
            weatherImage.src = imageUrl;
        } else {
            weatherImage.src = "images/sunny.jpg";
        }
    };

    if (searchForm) {
        // initially will display for london

        fetchWeather("London");

        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const location = searchInput.value.trim();
            if (!location) {
                alert("Please enter a city name.");
                return;
            }
            fetchWeather(location);
        });
    } else {
        console.error("Search form not found.");
    }
});
