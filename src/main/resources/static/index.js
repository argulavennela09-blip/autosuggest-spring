// alert("hii from js")
console.log("hello from js")
// 
var user=[
    {
        "name":"John doe",
        "gender":"Male",
        "img":"john.png"

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