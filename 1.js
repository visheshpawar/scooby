window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scb").style.width = scrolled + "%";
 var t=(winScroll / height) * 150;
  document.getElementById("i8").style.marginLeft = t+10 + "%";
  var o=(winScroll / height) * 150;
  document.getElementById("d1").style.marginLeft = o +10+ "%";
  var xc=(winScroll / height) * 150;
  document.getElementById("d2").style.marginLeft = -xc +65+ "%";
  var ass=(winScroll / height) * 150;
  document.getElementById("d3").style.marginLeft = ass -20+ "%";
  var ssa=(winScroll / height) * 150;
  document.getElementById("d4").style.marginLeft = -ssa +130+ "%";
  var iss=(winScroll / height) * 150;
  document.getElementById("d5").style.marginLeft = -iss -1000+ "%";
}