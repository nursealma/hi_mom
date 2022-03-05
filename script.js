window.addEventListener('load', () => {
  const tempCelcius = document.getElementById("tempCelsius");
  const tempFahrenheit = document.getElementById("tempFahrenheit")
  const todaysDate = document.getElementById("todaysDate");
  const desc = document.getElementById("desc");
  const timeCurrent = document.getElementById("currentTime");

  const API_KEY = "3e59aefaf532a306b31b845b34656d12";

  const getDay = () => {
    var today = new Date();
    var dd = String(today.getDate());
    today = dd;
    return today;
  }

  const getCurrentTime = () => {
    let currentTime = new Date(); // for now
    let currentHour = currentTime.getHours(); 
    let currentMinute = currentTime.getMinutes();
    if (currentMinute.toString().length == 1) {
      currentMinute = "0" + currentMinute;
  }
    currentTime = `${currentHour} : ${currentMinute}`;
    return currentTime;
  }

  const getMonth = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return monthNames[d.getMonth()];
  }
  const ctof = (celsius) => {
    return celsius * 9 / 5 + 32;
  }

  const getSanJoseWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=95008&units=metric&appid=${API_KEY}`
    fetch(url)
      .then(response => response.json())
      .then(displayResults);
  }

  const displayResults = (weather) => {
    let description = weather.weather[0].description;
    let cTemp = weather.main.temp;
    let fTemp = ctof(cTemp);
    tempCelcius.innerText = `${cTemp.toFixed(1)} °C`;
    tempFahrenheit.innerText = `${fTemp.toFixed(1)} °F`;
    desc.innerText = description;
  }


  // const getTorontoWeather = () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=mississauga&units=metric&appid=${API_KEY}`
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(displayResults);
  // }

  // const displayResults = (weather) => {
  //   let description = weather.weather[0].description;
  //   let cTemp = weather.main.temp;
  //   let fTemp = ctof(cTemp);
  //   tempCelcius.innerText = `${cTemp.toFixed(1)} °C`;
  //   tempFahrenheit.innerText = `${fTemp.toFixed(1)} °F`;
  //   desc.innerText = description;
  // }
  todaysDate.innerHTML = getMonth() + " " + getDay();
  timeCurrent.innerHTML = getCurrentTime();

  getSanJoseWeather();
  getTorontoWeather();
});





