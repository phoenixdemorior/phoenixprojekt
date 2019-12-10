document.getElementById("instagram").onclick = function() {
  document.getElementById("instagrampop").style.display = "block";
}

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById("instagrampop")) {
    document.getElementById("instagrampop").style.display = "none";
  }
});

document.getElementById("facebook").onclick = function() {
  document.getElementById("facebookpop").style.display = "block";
}

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById("facebookpop")) {
    document.getElementById("facebookpop").style.display = "none";
  }
});

document.getElementById("telefon").onclick = function() {
  document.getElementById("telefonpop").style.display = "block";
}

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById("telefonpop")) {
    document.getElementById("telefonpop").style.display = "none";
  }
});