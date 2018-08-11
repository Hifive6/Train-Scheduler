//I am initializing FireBase to the new database I created call Train Scheduler.


  var config = {
    apiKey: "AIzaSyAqZlNcwnYU74TWlF7G718HBc0FdAAwgbw",
    authDomain: "train-scheduler-d4c11.firebaseapp.com",
    databaseURL: "https://train-scheduler-d4c11.firebaseio.com",
    projectId: "train-scheduler-d4c11",
    storageBucket: "train-scheduler-d4c11.appspot.com",
    messagingSenderId: "131452634208"
  };
  firebase.initializeApp(config);

 
 
var database = firebase.database();
console.log(database);
 

//This is the event for the that will be attached to submit and add a new train to the schedule 
$("#train-btn").on("click", function(event){
    event.preventDefault();


//These variables will grab the user inputs and hold the value
var trainName = $("#train-name-input").val().trim();
var trainDest = $("#destination-input").val().trim();
var trainTime = $("#first-train-input").val().trim();
var trainMin = $("#min-input").val().trim();
console.log(trainName);
console.log(trainDest);
console.log(trainTime);
console.log(trainMin);

// database.ref().set({
var newTrain = {
    name: trainName,
    destination: trainDest,
    time: trainTime,
    min: trainMin,
 };
// //});
//This should upload to firebase onto my database called Train Scheduler
database.ref().push(newTrain);

// console.log(newTrain.name);
// console.log(newTrain.destination);
// console.log(newTrain.time);
// console.log(newTrain.min);

})
