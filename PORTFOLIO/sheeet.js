const button = document.querySelector('.butt');
button.addEventListener('click', function(e){
  e.preventDefault();

  console.log('hhhh');
var name
var email
var text

name = document.getElementById('yourName').value;
email = document.getElementById('email').value;
text = document.getElementById('message').value;

if (name === "" || email === "" || text === "" ) {
    alert ("please input missing field")
}
else {
alert ("Your response has been submitted");
}
})


