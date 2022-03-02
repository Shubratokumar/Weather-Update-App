const API_KEY = `1fce48eed58cb660f21d02399814bf2c`;
const searchTemperature = () => {
    const input = document.getElementById('city-name');
    const inputValue = input.value;
    input.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data = console.log(data))
}