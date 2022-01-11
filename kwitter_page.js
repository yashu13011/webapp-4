//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDPS6Fow_3SURInv9HsH7HAuV8veCRTBAc",
    authDomain: "let-s-chat-webapp-1-4.firebaseapp.com",
    databaseURL: "https://let-s-chat-webapp-1-4-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-webapp-1-4",
    storageBucket: "let-s-chat-webapp-1-4.appspot.com",
    messagingSenderId: "594190955852",
    appId: "1:594190955852:web:00433ef21d1ad210924be9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("User name");
   room_name = localStorage.getItem("room name");

   function send(){
         msg = document.getElementById("msg").value;
         firebase.database().ref("room name").push({
               name: user_name,
               message: msg,
               like: 0
         });
         document.getElementById("msg").value = "";
   }

function getData() { firebase.database().ref("/"+"room name").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
    function logout(){
        localStorage.removeItem("User name");
        localStorage.removeItem("room name");
        window.location = "index.html";
  }