class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomer = [];
    }
    newCustomer(customer) {
        let { firstName, lastName, personalId } = customer;
        if (this.allCustomer.find(x => x.personalId == personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        if (this.allCustomer.find(x => x.firstName == firstName) && this.allCustomer.find(x => x.lastName == lastName)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        this.allCustomer.push({ firstName, lastName, personalId, info: [] });
        return { firstName, lastName, personalId }
    }
    depositMoney(personalId, amount) {
        let id = this.allCustomer.find(x => x.personalId == personalId)
        if (!id) {
            throw new Error('We have no customer with this ID!')
        }
        id.totalMoney ?
            id.totalMoney += amount
            : id.totalMoney = amount;
        let countTransaction = id.info.length + 1;
        id.info.push(`${countTransaction}. ${id.firstName} ${id.lastName} made deposit of ${amount}$!`)
        return `${id.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let id = this.allCustomer.find(x => x.personalId == personalId)
        if (!id) {
            throw new Error('We have no customer with this ID!');
        }
        if (id.totalMoney < amount) {
            throw new Error(`${id.firstName} ${id.lastName} does not have enough money to withdraw that amount!`);
        }
        id.totalMoney -= amount;
        let countTransaction = id.info.length + 1;
        id.info.push(`${countTransaction}. ${id.firstName} ${id.lastName} withdrew ${amount}$!`)
        return `${id.totalMoney}$`
    }
    customerInfo(personalId) {
        let id = this.allCustomer.find(x => x.personalId == personalId)
        if (!id) {
            throw new Error('We have no customer with this ID!');
        }
        return `Bank name: ${this._bankName
            }\nCustomer name: ${id.firstName} ${id.lastName
            }\nCustomer ID: ${personalId
            }\nTotal Money: ${id.totalMoney
            }$\nTransactions:\n${id.info.reverse().join("\n")}`;
    }
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
