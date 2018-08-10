//I am initializing FireBase to the new database I created call Train Scheduler.

var config = {
        apiKey: "AIzaSyAk5EQKDpcovcDrkGoVoKqr1kBhHzpe49g",
        authDomain: "train-scheduler-55.firebaseapp.com",
        databaseURL: "https://train-scheduler-55.firebaseio.com",
        projectId: "train-scheduler-55",
        storageBucket: "",
        messagingSenderId: "550728606796"
  };

  firebase.initializeApp(config);

var database = firebase.database();
 

//This is the button that will be used to submit and add a new train to the schedule 
$("#add-train-btn").on("click", function(event){
    event.preventDefault();
})