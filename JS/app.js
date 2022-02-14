function getPin() {
  const pin = Math.round(Math.random() * 10000);
  //Here is a big tricks, ekta Number er sathe ekta empty string jog koira dile sei number tao string a convert hoiya jai.
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    //pin jodi 3 dijit er hoi tahole abar fonction ta k call korbe
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function (event) {
  //event buble ta amra use korsi, sob key button er parent a listener add korsi r terget koice key gula jegula child ,segula dhorsi
  const number = event.target.innerText;
  //input filed k dhorlam ,"C" tte click korle clear kore disi, r Not a Number hoile input dekhai nai
  const clacInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if(number=='C'){
        clacInput.value = '';
    }
  }
  //input filed k dhorlam , jeikhane type kora button gula k pathabo
  else {
    const previousNumber = clacInput.value;
    const newCalc = previousNumber + number;
    clacInput.value = newCalc;
  }
});
//Pin Verify
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
       
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}
