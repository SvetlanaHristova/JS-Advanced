function colorize() {
    let row = document.querySelectorAll("table tr");

    for (let i = 0; i < row.length; i++) {
        if (i % 2 !== 0) {
            row[i].style.background = 'teal';
        }
    }

}