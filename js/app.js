const API_KEY = `1fce48eed58cb660f21d02399814bf2c`;
const searchTemperature = () => {
    const input = document.getElementById('city-name');
    const inputValue = input.value;
    input.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayWeather = weather => {
    // set weather updates
    setInnerText('city', weather?.name ? weather?.name : "City not found !!");
    setInnerText('countrycode', weather?.sys.country ? weather?.sys.country : "null");
    setInnerText('temperature', weather?.main.temp ? weather?.main.temp : " ");
    setInnerText('condition', weather?.weather[0].main ? weather?.weather[0].main : " ");
    setInnerText('clouddescription', weather?.weather[0].description ? weather?.weather[0].description : " ");


    // set weather icon
    const urlIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', urlIcon);
}