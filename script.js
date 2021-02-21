window.addEventListener('load', () => {
  const tempCelcius = document.getElementById("tempCelsius");
  const tempFahrenheit = document.getElementById("tempFahrenheit")
  const todaysDate = document.getElementById("todaysDate");

  const getDay = () => {
    var today = new Date();
    var dd = String(today.getDate());
    today = dd;
    return today;
  }

  const getMonth = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return monthNames[d.getMonth()];
  }
  const ctof = (celsius) => {
    return celsius * 9 /5 + 32;
  }

  const getTorontoWeather = () => {
    const API_KEY = "3e59aefaf532a306b31b845b34656d12";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=${API_KEY}`
    fetch(url)
      .then(response => response.json())
      .then(displayResults);
  }

  const displayResults = (weather) => {
    let cTemp = weather.main.temp;
    let fTemp = ctof(cTemp);
    tempCelcius.innerText = `${cTemp.toFixed(1)} °C`;
    tempFahrenheit.innerText = `${fTemp.toFixed(1)} °F`;
  }
  todaysDate.innerHTML = getMonth() + " " + getDay();
  getTorontoWeather();
});





