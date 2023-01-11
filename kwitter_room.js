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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User Name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!";
//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name is - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;  
    //End code
    });});}
getData();

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("Room_Name", room_name);
    window.location = "kwitter_page.html";
}

function redirect(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("User Name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
}
