/* Global Variables */
const apiKey = 'a61a89e4fe9e4551a5e2b91fb1180525';

const generateBtn = document.querySelector('#generate');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

generateBtn.addEventListener('click', async () => {
    const zipCode =document.getElementById('zip').value;
    const fullURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
    const res = await fetch(fullURL);
    try {
        const resData = await res.json();
        const temp = resData.main.temp;
        console.log(temp);
    } catch (error) {
        console.log('error', error);
    }
})