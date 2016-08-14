//INITIALIZE FIREBASE
  var config = {
    apiKey: "AIzaSyACzKYPYXMwH4U0IBH35suYDs7ti_QDKKQ",
    authDomain: "trainschedule-ec1e9.firebaseapp.com",
    databaseURL: "https://trainschedule-ec1e9.firebaseio.com",
    storageBucket: "trainschedule-ec1e9.appspot.com",
  };
  firebase.initializeApp(config);


//CREATES A NEW FIREBASE DATABASE
var database = firebase.database();


$("#submit").on("click",function(){

var trainName = "";
var destination = "";
var frequency = 0;

//STORE AND REFERENCE DATA
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  frequency = $("#frequency").val().trim();

//ADDS TRAIN DATA TO DATABASE
trainData.push ({
  trainName: trainName,
  destination: destination,
  frequency: frequency,
  dateAdded: Firebase.ServerValue.TIMESTAMP
});
console.log("pushingdata");

//DO NOT REFRESH PAGE 
return false;
});

//GET INFORMATION FROM THE DB WHEN THE PAGE LOADS OR WHEN A NEW TRAIN IS ADDED
database.ref().on("child_added", function(childSnapshot){

//logs everything to console for troubleshooting
  console.log(childSnapshot.val().trainName);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().frequency);

 
//ADD EACH TRAIN'S DATA INTO THE TABLE
$("#trainData").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +  frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td><tr>");

//Handle the error
}, function(errorObject){

});

//html being changed here to reflect data
trainData.orderByChild("dataAdded").limitToLast(1).on("child_added",function(snapshot){

  $("#trainNamedisplay").html(snapshot.val().trainName);
  $("#destinationdisplay").html(snapshot.val().destination);
  $("#frequencydisplay").html(snapshot.val().frequency);

})


function startTime(){

//convert time?
//showing current time
var currentTime = moment().format('HH:mm:');
$('#time').html(currentTime);

}



var timeDifference = moment().diff();
var trainArrival = trainFrequency - timeLeft;

