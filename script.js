var address = document.getElementById("address");
function openTab(){
  if (address.value.includes("http://") || address.value.includes("https://")) {
      a = address.value;
  } else{
      a = "https://" + address.value;
  }
  var i;
  for (i = 0; i < 5; i++) {
    window.open(a);
  }
}
