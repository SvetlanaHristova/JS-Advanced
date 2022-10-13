function printDeckOfCards(cards) {
    let facesValid = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A"];
    let suitsValid = ['S', 'H', 'D', 'C'];
    let objSuits = {
        "S": "♠", "H": "♥", "D": "♦", "C": "♣"  //странно защо като преместя 2-6 ред на ред 20 
    }                                           // и първия тест дава грешкар не трябва

    let res = [];

    for (let card of cards) {
        let faces = card.slice(0, -1);
        let suits = card.slice(-1);
        try {
            res.push(createCard(faces, suits));
        } catch (err) {
            res = [`Invalid card: ${card}`];
        }
    }
    console.log(res.join(' '));

    function createCard(faces, suits) {
        if (!facesValid.includes(faces)) {
            throw new Error(`Invalid card: ${card}`);
        }
        if (!suitsValid.includes(suits)) {
            throw new Error(`Invalid card: ${card}`);
        }
        let card = {
            faces: faces,
            suits: objSuits[suits],
            toString() {
                return this.faces + this.suits;
            }
        }
        return card.toString();
    }
}


printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1A'])
