const firebaseConfig = {
    apiKey: "AIzaSyAZUJRVnJl1Wxd5LodqvCWwwYVZd0p73_c",
    authDomain: "kwitter-webpage-cfc34.firebaseapp.com",
    databaseURL: "https://kwitter-webpage-cfc34-default-rtdb.firebaseio.com",
    projectId: "kwitter-webpage-cfc34",
    storageBucket: "kwitter-webpage-cfc34.appspot.com",
    messagingSenderId: "879824857639",
    appId: "1:879824857639:web:e77282464916c893667c02",
    measurementId: "G-HT6XQF0B1X"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name -"+Room_name);
row="<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr></hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}