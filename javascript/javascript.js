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
var trainTime = moment($("#first-train-input").val().trim(), "HH:mm").format("Hm");
var trainMin = $("#min-input").val().trim();


// database.ref().set({
var newTrain = {
    name: trainName,
    destination: trainDest,
    time: trainTime,
    min: trainMin,
 };

//This should upload to firebase onto my database called Train Scheduler
database.ref().push(newTrain);

// console.log(newTrain.name);
// console.log(newTrain.destination);
// console.log(newTrain.time);
 console.log(newTrain.min);
//Clears variable and input boxes to add more trains
var trainName = $("#train-name-input").val(" ");
var trainDest = $("#destination-input").val(" ");
var trainTime = $("#first-train-input").val(" ");
var trainMin = $("#min-input").val(" ");

});

//This will create even adding employees to firebase 
database.ref().on("child_added", function(childSnaphot){
  console.log(childSnaphot.val());

//Variables that are now holding values from user input
  var trainName = childSnaphot.val().name;
  var trainDest = childSnaphot.val().destination;
  var trainTime = childSnaphot.val().time;
  var trainMin = childSnaphot.val().min;

  console.log(trainName);
  console.log(trainDest);
  console.log(trainTime);
  console.log(trainMin);

  //this variable converts the time back one 1 year to no conflict for current time
  var firstTimeConverted = moment(trainTime, "Hm").subtract(1, "years");
  //confirmed that the time was convert to 1 year in past
  console.log(firstTimeConverted);

  //this variable will is holding the current time
  var current = moment();
  console.log ("Currect Time: " + moment(current).format("Hm"));

  //This give me the difference form current time and a years passed in minutes
  var timeDifference = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("difference of time: " + timeDifference);

  //Time in minutes till next train
  var nextTimeMin = timeDifference % trainMin;
  console.log(nextTimeMin);

  var nextTraintime = trainMin - nextTimeMin;
  console.log("till next Train: " + nextTraintime);

  var nextTrain = moment().add(nextTraintime, "minutes");
  var convertedNextTrain = moment(nextTrain).format("Hm");
  //console.log("arrival time " + moment(nextTrain).format("Hm"));
 
  
  //adding all information to to variable to call it later to add all info to table
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDest),
    $("<td>").text("Every: " + trainMin + "minutes"),
    $("<td>").text(convertedNextTrain),
    $("<td>").text(nextTimeMin),

  );
  //This adds all information to table updating inputed data to the top as current
  $("#train-table > tbody").prepend(newRow);
})


