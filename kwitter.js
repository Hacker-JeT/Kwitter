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
  document.getElementById("user_name").value = "Welcome " + user_name + "!" ;
  
  function addUser() {
  
    user_name = document.getElementById("user_name").value;
  
      localStorage.setItem("user_name", user_name);
    
     // window.location = "kwitter_room.html";
     firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
      } 