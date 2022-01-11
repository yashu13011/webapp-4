function login(){
    user_name = document.getElementById("login").value;
    localStorage.setItem("user name" , user_name);
    window.location = "kwitter_room.html";
}