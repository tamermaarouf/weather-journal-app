/* Global Variables */
const apiKey = 'a61a89e4fe9e4551a5e2b91fb1180525';
const fullURL = `api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={apiKey}&units=metric`
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();