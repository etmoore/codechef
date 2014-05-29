
// console.log(process.argv)
//console.log("How much would you like to withdrawal?");
var withdrawal = parseFloat(process.argv[2]);
var balance = parseFloat(process.argv[3]);
//console.log("What is your current balance?");
//var balance = prompt();

var atm = function(withdrawal, balance) {
  var fee = 0.5
  if (withdrawal > balance) {
    return balance;
  } else if (withdrawal % 5 == 0) {
    balance -= (withdrawal + fee)
    console.log(balance);
    return balance;
  } else {
    return balance;
  }
}

atm(withdrawal, balance);
