const apiKey = '08b0ff2709d21f21317b70ec38ddc947'

const fetchData = position =>{
    const { latitude, longitude } = position.coords
 const myPetition = fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
   myPetition.then(data => console.log(data))
console.log(position)
}

const onLoad = () => {
navigator.geolocation.getCurrentPosition(fetchData)

}

