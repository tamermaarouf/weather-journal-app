/* Global Variables */
const generateBtn = document.querySelector('#generate');

// Personal API Key for OpenWeatherMap API
const apiKey = 'a61a89e4fe9e4551a5e2b91fb1180525';
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
generateBtn.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const zipCode = document.getElementById('zip').value;
    const feeling = document.querySelector('#feelings').value
    getTempAPI(baseURL, zipCode, apiKey)
    .then(function(data){
        // console.log('.then', data);
        postData('/addTemperature', {date: newDate, Temp: data, content: feeling})
        updateUI()  
    })
}

/* Function to GET Web API Data*/
const getTempAPI = async (baseURL, zipCode, apiKey)=>{
    const fullURL = `${baseURL}zip=${zipCode}&appid=${apiKey}&units=metric`;
    // console.log(fullURL);
    const res = await fetch(fullURL);
    try {
        const data = await res.json();
        const dataTemp = data.main.temp;
        // console.log(dataTemp);
        return dataTemp;
    } catch (error) {
        console.log('error', error);
    }
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    // console.log('server = ', data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        // console.log('newData', newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

  const updateUI = async () =>{
      const req = await fetch('/updateUiTemp');
      try {
          const dataUI = await req.json();
          document.getElementById('date').innerHTML = 'Date:' + ' ' + dataUI.date;
          document.getElementById('temp').innerHTML = 'Temperature:' + ' ' + dataUI.Temp;
          document.getElementById('content').innerHTML = 'you feeling today : ' + ' ' + dataUI.content;
          console.log(dataUI);
      } catch (error) {
          
      }
  }