class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (this.listOfParticipants.find(n => n.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(x => x.name == name);
        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == "WaterBalloonFights") {
            let player1 = this.listOfParticipants.find(x => x.name == participant1);
            let player2 = this.listOfParticipants.find(x => x.name == participant2);
            if (!player1 || !player2) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (player1.power == player2.power) {
                return `There is no winner.`;
            } else {
                player1.power > player2.power ? player1.wins++ : player2.wins++;
                return player1.power > player2.power ?
                    `The ${participant1} is winner in the game ${typeOfGame}.`
                    : `The ${participant2} is winner in the game ${typeOfGame}.`;
            }
        } else if (typeOfGame == "Battleship") {
            let player = this.listOfParticipants.find(x => x.name == participant1);
            if (!player) {
                throw new Error(`Invalid entered name/s.`);
            }
            player.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let res = [];
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .map(x => res.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`));
        res.unshift(`${this.organizer} will take ${res.length} participants on camping to ${this.location}`);
        return res.join('\n');
    }
}
/*
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
*/
/*
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));
*/
/*
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
*/
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
