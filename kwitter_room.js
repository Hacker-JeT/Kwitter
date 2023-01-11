//ADD YOUR FIREBASE LINKS
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
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Group_names = childKey; 
        Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  
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
  