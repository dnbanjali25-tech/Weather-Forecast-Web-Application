async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherInfo").innerHTML = 
                "<p>City not found!</p>";
            return;
        }

        document.getElementById("weatherInfo").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌥 Weather: ${data.weather[0].description}</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML =
            "<p>Error fetching data</p>";
    }
}
