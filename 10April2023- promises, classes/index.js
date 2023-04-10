class Customer {
    customerId;
    name;
    accountNumber;
    accountBalance;

    deposit(amount) {
        this.accountBalance = amount + this.accountBalance;
    }
    withdraw(amount) {
        this.accountBalance = this.accountBalance - amount;
    }
}
var customer1 = new Customer();
customer1.accountBalance = 9000;
customer1.accountNumber = 900;
customer1.name = "kiran";
customer1.customerId = 9899;
console.log(customer1);
customer1.withdraw(3000);
customer1.deposit(20000);
console.log(customer1.accountBalance);