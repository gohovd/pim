// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqUjpKOGkuVHHDpcHHEsfpE-czP9bT11A",
  authDomain: "playground-8b088.firebaseapp.com",
  databaseURL: "https://playground-8b088.firebaseio.com",
  projectId: "playground-8b088",
  storageBucket: "playground-8b088.appspot.com",
  messagingSenderId: "1011884829096"
};
firebase.initializeApp(config);

      // Get a reference to the database service
      var database = firebase.database();


                         
//                  _       
//  ___ _ _ ___ ___| |_ ___ 
// | -_| | | -_|   |  _|_ -|
// |___|\_/|___|_|_|_| |___|
                      
document.getElementById("sendMsgBtn").addEventListener("click", writeMsg);
console.log("Was here yeah..");

      function writeMsg() {
        var message = document.getElementById("message").value;
        var user = document.getElementById("author").value;
        console.log("Message: " + message + " .. Written by, " + user);

        firebase.database().ref('messages/').set({
          message: message
        });
      };