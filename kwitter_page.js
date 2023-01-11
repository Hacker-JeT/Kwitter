//YOUR FIRE BASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyCvfp7EMhnHtx1UgjfaDqKKaJgA5Ax7duE",
  authDomain: "classtest-6433b.firebaseapp.com",
  databaseURL: "https://classtest-6433b-default-rtdb.firebaseio.com",
  projectId: "classtest-6433b",
  storageBucket: "classtest-6433b.appspot.com",
  messagingSenderId: "857527541271",
  appId: "1:857527541271:web:a992f089f9bd284324c652",
  measurementId: "G-YPPC5MFJNE"
  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  
  