class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw `${participantName} is not in the current participants list`;
        } else if (condition < 30) {
            throw `${participantName} is not well prepared and cannot finish any discipline`;
        } else if (condition >= 30 && condition < 90) {
            return `${participantName} could only complete ${Math.floor(condition / 30)} of the disciplines`;
        } else {
            this.listOfFinalists.push({ [participantName]: this.participants[participantName] });
            delete this.participants[participantName];
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }
    rewarding(participantName) {
        let finalist = "";
        for (let el of this.listOfFinalists) {
            if (el.hasOwnProperty(participantName)) {
                finalist = participantName;
                break;
            }
        }
        return finalist ?
            `${participantName} was rewarded with a trophy for his performance`
            : `${participantName} is not in the current finalists list`;
    }

    showRecord(criteria) {
        if (this.listOfFinalists == []) {
            return `There are no finalists in this competition`;
        }
        let finalist = [];
        if (criteria == "all") {
            this.listOfFinalists.map(x => finalist.push(Object.keys(x)[0]));
            finalist.sort((a,b)=>(a).localeCompare(b));
           return finalist.length!=0?
             `List of all ${this.competitionName} finalists:\n${finalist.join('\n')}`
             :`There are no finalists in this competition`;
        } else {
            for (let el of this.listOfFinalists) {
                if (Object.entries(el)[0][1] == criteria) {
                    return `${Object.entries(el)[0][0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            }
            return `There are no ${criteria}'s that finished the competition`;
        }
    }
}
    /*
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
contest.rewarding()
*/
 /*
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.completeness("George", 20));
*/
/*const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
*/
/*
const contest = new Triathlon("Dynamos");
console.log(contest.showRecord("all"));
*/
/*
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));

*/
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));
