const apiKey = "09d548a33db0542ad09ffa093324e81a";

const fetchData = (position) => {
  const { latitude, longitude } = position.coords; //desestructuring para obtener data de esos dos datos especificos //
  const myPetition = fetch(
    `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );
  myPetition
    .then((response) => response.json())
    .then((data) => setWeatherData(data));
};

const setWeatherData = (data) => {
  console.log(data);

  const weatherInformation = {
    location: data.name,
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    temperature: data.main.temp,
    date: getDate(),
  };

  Object.keys(weatherInformation).forEach((key) => {
    document.getElementById(key).textContent = weatherInformation[key];
  });
};


const getDate= () =>{
   
    let newDate = new Date();
    let enUSFormatter = new Intl.DateTimeFormat("es-AR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    return enUSFormatter.format(newDate)


}

const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
};
