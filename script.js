//Define variables for form 
const name = document.querySelector(".form-group1");
const email = document.querySelector(".form-group2");
const role = document.querySelector(".form-group3");
const description = document.querySelector(".form-group4");
const linkedIn = document.querySelector(".form-group5");
const phone = document.querySelector(".form-group6");
const place = document.querySelector(".form-group7");
const profilePicture = document.querySelector(".form-group8");

// Define variable for card maker
const cardName = document.querySelector(".card-name");
const cardEmail = document.querySelector(".card-email");
const cardRole = document.querySelector(".card-role");
const cardDescription = document.querySelector(".card-description");
const cardLinkedIn = document.querySelector(".card-linkedIn");
const cardPhone = document.querySelector(".card-phone");
const cardPlace = document.querySelector(".card-place");
const cardPic = document.querySelector(".card-pic");


loadEventListeners();
function loadEventListeners(){
    name.addEventListener('input', updateName);
    
    email.addEventListener('input', updateEmail);
    role.addEventListener('input', updateRole);
    description.addEventListener('input', updateDescription);
    linkedIn.addEventListener('input', updateLinkedIn);
    phone.addEventListener('input', updatePhone);
    place.addEventListener('input', updatePlace);
    
  

}

function check(e){
	console.log(e.target.value);
};

function updateName(e){
	cardName.innerHTML =`My Name is ${e.target.value}`;

}
function updateEmail(e){
	cardEmail.innerHTML =`Email : ${e.target.value}`;

}
function updateRole(e){
	cardRole.innerHTML =`Current Role : ${e.target.value}`;

}
function updateDescription(e){
	cardDescription.innerHTML =`${e.target.value}`;

}
function updateLinkedIn(e){
	cardLinkedIn.innerHTML =`LinkedIn : ${e.target.value}`;

}
function updatePhone(e){
	cardPhone.innerHTML =`Phn : ${e.target.value}`;

}
function updatePlace(e){
	cardPlace.innerHTML =`Place : ${e.target.value}`;

}

//To update profile pic
var openFile = function(file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.querySelector('.card-pic');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };