var address = document.getElementById("address");
function openTab(){
  var i;
  for (i = 0; i < 5; i++) {
    window.open(address.value);
  }
}
