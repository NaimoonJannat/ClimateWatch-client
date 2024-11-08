import React, { useEffect, useState } from 'react';
import clear_icon from '../../assets/clear.png';
import cloud_icon from '../../assets/cloud.png';
import drizzle_icon from '../../assets/drizzle.png';
import rain_icon from '../../assets/rain.png';
import snow_icon from '../../assets/snow.png';


const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [locationError, setLocationError] = useState(null);
    console.log(weatherData);
    
    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02n": cloud_icon,
        "02d": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    };
    
    // const fetchWeather = useEffect((latitude,longitude)=>{
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=efa8fa18075f8027079862ecbe50dca0`)
    // .then(res => res.json())
    // .then(data => setWeatherData(data))
    // },[])

    const fetchWeather = async (latitude, longitude) => {
        try {
        console.log('hello');
        
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=efa8fa18075f8027079862ecbe50dca0`;
            // const url = `https://api.open-meteo.com/v1/forecast?${latitude}&${longitude}&${hourly}&timezone=auto&past_days=7`
            
    
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                icon: icon,
                location: data.name
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(latitude, longitude);
                },
                (error) => {
                    setLocationError("Location access denied. Unable to fetch weather data.", error);
                }
            );
        } else {
            setLocationError("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div>
            { weatherData ? (
                <div>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Location: {weatherData.location}</p>
                    <div>
                        <img src={weatherData.icon} alt="Weather icon" />
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                        <p>Wind Speed: {weatherData.windSpeed} m/s</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
                
            )}
        </div>
    );
};

export default Weather;