
const text = document.getElementById('btn');



function maybeAlert() {
    alert("wooo let's go! :D");
}

var cart = document.getElementById('shopping-cart');
cart.addEventListener("mouseover", myFunction);
cart.addEventListener("click", mySecondFunction);
cart.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("shops").innerHTML += "Moused over!<br>";
  }
  
  function mySecondFunction() {
    document.getElementById("shops").innerHTML += "Clicked!<br>";
  }
  
  function myThirdFunction() {
    document.getElementById("shops").innerHTML += "Moused out!<br>";
  }