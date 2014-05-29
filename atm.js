// Problem: http://www.codechef.com/problems/HS08TEST
// Instructions: Run in node. Input withdrawal amount and balance amount from the command line (arg 2 and 3).

var withdrawal = parseFloat(process.argv[2]);
var balance = parseFloat(process.argv[3]);

var atm = function(withdrawal, balance) {
  var fee = 0.5
  if (withdrawal + 0.5 > balance) {
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
