function tickets(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let arr = [];
    for (let element of array) {
        let [destination, price, status] = element.split('|');
        price = Number(price);
        arr.push(new Ticket(destination, price, status));
    }
    criterion != 'price' ?
        arr.sort((a, b) => (a[criterion]).localeCompare(b[criterion]))
        : arr.sort((a, b) => a[criterion] - (b[criterion]));
    return arr;
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
)