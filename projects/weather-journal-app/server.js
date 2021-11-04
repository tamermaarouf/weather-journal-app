// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Spin up the server
const port = 3000;
const server = app.listen(port, listening);

// Callback to debug
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

  // Initialize all route with a callback function
  // GET route
  app.get('/updateUiTemp', sendData);

// Callback function to complete GET '/all'
function sendData (request, response) {
  // console.log(projectData);
  response.send(projectData);
}

// Post Route
app.post('/addTemperature', addTemperature);

function addTemperature (req,res){
  projectData = {...req.body};
  res.send(projectData);
  // console.log(projectData);
};

