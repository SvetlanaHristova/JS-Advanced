function playingCards(faces, suits) {
    if (faces !== faces.toUpperCase()) {
        throw new Error;
    }
    let facesValid = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A"];
    let suitsValid = ['S', 'H', 'D', 'C'];

    if (!facesValid.includes(faces)) {
        return "Error";
    }
    if (!suitsValid.includes(suits)) {
        return "Error";
    }
    let objSuits = {
        "S": "♠", "H": "♥", "D": "♦", "C": "♣"
    }
    let card = {
        faces: faces,
        suits: objSuits[suits],
        toString() {
            return this.faces + this.suits;
        }
    }

    return card;

}
console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));
