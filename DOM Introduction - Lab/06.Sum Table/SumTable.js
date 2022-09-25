function sumTable() {
    let product = document.querySelectorAll('table tr');
    let total = 0;
    for (let i = 1; i < product.length - 1; i++) {
        let cost = product[i].children;
        total += Number(cost[1].textContent);
    }
    document.getElementById('sum').textContent = total;

}