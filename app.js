const aboutMe = document.getElementById('folder4')
const div = document.querySelector('.text');
const textp = document.createElement('p')
const contact = document.getElementById('contact')
const contactform = document.getElementById('contact-form')
const backsign = document.getElementById('backsign')
const aboutme_text = document.getElementById('aboutme_page')

function callDateTime(){
  var currentDate=(new Date()).toDateString();
  var currentTime=(new Date()).toLocaleTimeString(); 
  document.getElementById('watch').innerHTML=`${currentTime}`;
}

setInterval(function(){  callDateTime() }, 1000);