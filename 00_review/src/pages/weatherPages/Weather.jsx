import { useState, useEffect } from "react";
import WeatherBox from "./WeatherBox";

const Weather = () => {
    const API_key = process.env.REACT_APP_API_KEY;
    // STEP 03.
    const [weather, setWeather] = useState(null);
    // STEP 04.
    const [city, setCity] = useState("");
    // console.log("city: ", city);
    const cityName = ["incheon", "Tokyo", "Shanghai", "Cairo", "paris"];

    const getWeathertoCity = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
    };

    // STEP 02.
    const getWeathertoLatLon = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setWeather(data);
    };

    // STEP 01.
    const getLatLon = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            return getWeathertoLatLon(lat, lon);
        });
    };

    useEffect(() => {
        if (city === "") {
            // STEP 01.
            getLatLon(); //처음 실행할때는 이것만 실행되도록}
        } else {
            // STEP 05.
            getWeathertoCity();
        }
    }, [city]);

    return (
        <div>
            <h1>WeatherPage임</h1>

            <h1>1.위도랑 경도 값 구하기</h1>

            <h1>2.API를 통해서 현재 위치의 날씨 값 가져오기기</h1>
            <>
                <h1>3.state 값으로 UI로 data 넘겨주기 </h1>
                <WeatherBox weather={weather} />
            </>
            <>
                <h1>4.버튼 누르면 버튼 지역명을 이 뭔지 업데이트 해주기</h1>
                <div>{city}</div>
                {cityName.map((item) => (
                    <button key={item} onClick={() => setCity(item)}>
                        {item}
                    </button>
                ))}
            </>
            <>
                <h1>5. 버튼에 있는 지역별 날씨 보여주기</h1>
                <WeatherBox weather={weather} />
            </>
        </div>
    );
};

export default Weather;
