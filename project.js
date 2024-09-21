const apiKey = "4ab978b7197a753cba3a3080c508e4f4";
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        // Get the latitude and longitude of the city using Geocoding API
        const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
        const geoResponse = await fetch(geoApiUrl);
        const geoData = await geoResponse.json();
        
        if (geoData.length === 0) {
            throw new Error("City not found");
        }
        
        const lat = geoData[0].lat;
        const lon = geoData[0].lon;
        
        // Use the latitude and longitude to get weather data
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const weatherResponse = await fetch(weatherApiUrl);
        const weatherData = await weatherResponse.json();
        
        console.log(weatherData);
        
        // Update the weather details on the page using weatherData.name for the city
        document.querySelector(".city").innerHTML = city; // This will show the actual city name
        document.querySelector(".temp").innerHTML = Math.round(weatherData.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = weatherData.main.humidity + "%";
        document.querySelector(".wind_speed").innerHTML = weatherData.wind.speed + "km/h";

        // Update the weather icon based on weather condition
        if (weatherData.weather[0].main == "Clouds") {
            weatherIcon.src = "Clouds.png";
        } else if (weatherData.weather[0].main == "Clear") {
            weatherIcon.src = "Clear.png";
        } else if (weatherData.weather[0].main == "Rain") {
            weatherIcon.src = "Rain.png";
        } else if (weatherData.weather[0].main == "Drizzle") {
            weatherIcon.src = "Drizzle.png";
        } else if (weatherData.weather[0].main == "Mist") {
            weatherIcon.src = "Mist.png";
        }

    } catch (error) {
        console.error(error);
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind_speed").innerHTML = "";
    }
}

// Trigger checkWeather function when the button is clicked
const searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click", () => {
    const city = document.querySelector(".search input").value.trim();
    if (city) {
        checkWeather(city);
    }
});
