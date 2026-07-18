// alert("hii from js")
console.log("hello from js")
// 
var user=[
    {
        "name":"Anu",
        "gender":"Female",
        "img":"WhatsApp Image 2026-07-18 at 12.16.15 PM.jpeg"

    },
    {
    "name":"Jane doe",
        "gender":"Female",
        "img":"jane.png"
    }
]
var id=0;
function toggleUser(){
    id=(id+1)%2
    
    var userImage = document.getElementById("user-image");
    userImage.src = user[id].img;

    
    var userName = document.getElementById("user-name");
    userName.innerHTML = user[id].name;

    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = user[id].gender;

}
function randomuser(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var userData=data.results[0];
    
        var userImage = document.getElementById("user-image");
    userImage.src = userData.picture.large;

    
    var userName = document.getElementById("user-name");
    userName.innerHTML = userData.name.first+" "+userData.name.last;

    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = userData.gender;


    })
 .catch(function(err){
    console.log(err);
 
 })
}