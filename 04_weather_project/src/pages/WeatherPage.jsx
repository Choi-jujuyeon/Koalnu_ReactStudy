import { useEffect } from "react";
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
    const getCurrentLocation = () => {
        // console.log("바로 호출이 된다!");
        //현재 위치를 보여줘야 한다.
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            // console.log("lat", lat, "long", lon);
        });
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);
    return <div>WeatherPage</div>;
}

export default WeatherPage;
