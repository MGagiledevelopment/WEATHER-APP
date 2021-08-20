const apiKey = '09d548a33db0542ad09ffa093324e81a'

const fetchData = position =>{
    const { latitude, longitude } = position.coords //desestructuring para obtener data de esos dos datos especificos //
 const myPetition = fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
   myPetition.then(response => response.json())
   .then(data => console.log(data))
   
console.log(position)
}

const onLoad = () => {
navigator.geolocation.getCurrentPosition(fetchData)

}

