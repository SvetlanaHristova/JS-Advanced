class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw `${peak} is not in your current goals`;
        } else if (this.resources == 0) {
            throw "You don't have enough resources to start the hike";
        } else {
            if ((this.resources - time * 10) < 0) {
                return "You don't have enough resources to complete the hike";
            } else {
                this.resources = this.resources - time * 10;
                this.listOfHikes.push({ peak, time, difficultyLevel });
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
            }
        }
    }
    rest(time) {
        if (this.resources + time * 10 >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            this.resources = this.resources + time * 10;
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }

    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria == "hard" || criteria == "easy") {
            let arr = this.listOfHikes.filter(x => x.difficultyLevel == criteria);
            arr.sort((a, b) => a.time - b.time);
            return arr.length > 0 ?
                `${this.username}'s best ${criteria} hike is ${arr[0].peak} peak, for ${arr[0].time} hours`
                : `${this.username} has not done any ${criteria} hiking yet`
        }
        let text = this.listOfHikes.map(x => `${this.username} hiked ${x.peak} for ${x.time} hours`);
        return `All hiking records:\n${text.join('\n')}`;
    }
}
/*const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));
*/
/*
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));
*/
/*const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5));
*/
/*
const user = new SmartHike('Vili');
console.log(user.showRecord('all'));
*/
const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
