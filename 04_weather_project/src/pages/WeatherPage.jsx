import { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import WeatherBox from "../components/WeatherBox";
import WeatherButton from "../components/WeatherButton";
/*
1. 앱 실행하자마자 현재 위치 기반의 날씨가 나온다.
    : 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태 정보가 있다.
2. 5개의 버튼이 있다.
    : 1개는 현재 위치, 4개는 다른 해외 도시의 위치
3. 도시 버튼을 클릭할 때마다 도시 의 날씨가 나온다.
4. 현재 위치 버튼을 누르면, 다시 현재 위치 기반의 날씨가 나온다.
5. 데이터를 들고오는 동안 로딩 스피너가 돈다.
*/
function WeatherPage() {
    const [weather, setWeather] = useState(null);
    const [city,setCity] = useState('')
    const [loading,setLoading] = useState(false)
    const cities=['Current location','paris','new york','tokyo','seoul']

    const getCurrentLocation = () => {
        // console.log("바로 호출이 된다!");
        //현재 위치를 보여줘야 한다.
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            // console.log("lat", lat, "long", lon);
            getWeatherByCurrentLocation(lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        const API_KEY = "57eb4fd31ae9cfe1da06fea68062638a"; // 공백 없이!

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        setLoading(true)
        let response = await fetch(url); //비동기적으로 처리=>async함수로 동작!
        let data = await response.json();
        console.log("data", data);
        
        setWeather(data);
        setLoading(false)
    };

    const getWeatherByCity = async() =>{
        const API_KEY = "57eb4fd31ae9cfe1da06fea68062638a"; // 공백 없이!
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;//state->city값 넣어주기
        setLoading(true)
        let response = await fetch(url);
        let data = await response.json();
        // console.log("data",data)
        setWeather(data)
        setLoading(false)
        
    }
    useEffect(() => {
        if(city==""){
            getCurrentLocation()
        }else{
            getWeatherByCity();
        }
    }, [city]);
    // city 버튼 클릭할때마다 도시별 날씨가 나오게 설정
    // useEffect(()=>{
    //     // console.log("city?",city)
    //     getWeatherByCity()

    // },[city])
    return (
        <WeatherPageContainer>
            {loading?(<LoadingSpinner loading={loading}/>):(   
                <>
            <WeatherBox weather={weather} />
            <WeatherButton weather={weather} cities={cities} setCity={setCity}/></>
            ) }
          
         
        </WeatherPageContainer>
    );
}

export default WeatherPage;

const WeatherPageContainer = styled.div`
    background: url("https://i.pinimg.com/474x/1e/fc/09/1efc099514a41cc4029f37fe42d867a5.jpg");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
