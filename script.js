var address = document.getElementById("address");
var slider = document.getElementById("slider");
var output = document.getElementById("output");
output.innerHTML = "Open URL" + slider.value + "times.";

function openTab(){
  if (address.value.includes("http://") || address.value.includes("https://")) {
      a = address.value;
  } else{
      a = "https://" + address.value;
  }
  var i;
  for (i = 0; i < slider.value; i++) {
    window.open(a);
  }
}
