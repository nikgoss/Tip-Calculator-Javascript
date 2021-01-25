// Tip Calculator

function billAmount() {
  var billAmt = document.getElementById("totalBill").value;
  console.log("Bill Amt: " + billAmt);
  return billAmt;
  //document.getElementById("tipSpan").innerHTML = billAmt;
}
function tipPercent() {
  var tipPercent1 = parseFloat(document.getElementById("selectQuality").value);
  console.log(tipPercent1);
  return tipPercent1;
}

function noOfPeople() {
  var noOfPeople1 = parseFloat(document.getElementById("peopleamt").value);

  if (isNaN(noOfPeople1)) {
    noOfPeople1 = 1;
  } else {
    console.log("not nan");
  }
  console.log("No of People: " + noOfPeople1);
  return noOfPeople1;
}

function tipCalculator() {
  document.getElementById("tipSpan").innerHTML = parseFloat(
    (billAmount() * tipPercent()) / noOfPeople()
  ).toFixed(2);
}

function calculateTotal() {
  tipCalculator();
  billAmount();
  tipPercent();
  noOfPeople();
}
