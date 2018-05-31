Account(balance)
	withdraw(amt) = balance - amt
	deposit(amt) = balance + amt
	getBalance => "Your balance is $balance."

function Account(balance) {
	this.balance = balance;
	this.withdraw = function(amt) { return this.balance -= amount; };
	this.deposit = function(amt) { return this.balance += amount; };
	this.getBalance = function() { return "Your balance is " + this.balance + "."; };
}

Account balance = { balance : balance }
balance Account _balance = _balance
withdraw (Account balance) amt = Account (balance - amt)
deposit (Account balance) amt = Account (balance + amt)
getBalance Account balance = "Your balance is " ++ (show balance) ++ '.'

var Account = function(balance) { return { balance: balance }; };
Account.prototype.withdraw = function(amt) { return Account(this.balance - amt); };
Account.prototype.deposit = function(amt) { return Account(this.balance + amt); };
Account.prototype.getBalance = function(amt) { return "Your balance is " + this.balance + "." };
