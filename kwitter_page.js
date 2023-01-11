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
  Room_name = localStorage.getItem("Room_name");

function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
      //Start code
        console.log(firebase_message_id);
        console.log(message_data);

        Name = message_data['Name'];
        Message = message_data['Message'];
        like = message_data['likes'];

        name_with_tag = "<h4>" + Name + "<img class='tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + Message + "</h4>";
        like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick=updateLike(this.id)>";
        span = "<span class='glyphicon glyphicon-thumbs-up'>&nbsp;Like : " + like + "</span></button><hr>";

        column = name_with_tag + message_with_tag + like_button + span;
        document.getElementById("output").innerHTML += column;
      //End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;

    firebase.database().ref(Room_name).push({
          Name:user_name,
          Message:msg,
          likes:0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("User Name");
    localStorage.removeItem("Room_name");
    window.location.replace("index.html");
}

function updateLike(message_id) {
    console.log("Clicked on Like button - " + message_id);
    button_id = message_id;
    liked = document.getElementById(button_id).value;
    updated_likes = Number(liked) + 1;
    console.log(updated_likes);

    firebase.database().ref(Room_name).child(message_id).update({
          likes : updated_likes
    });
}
