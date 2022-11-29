class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw "Invalid input!";
        } else {
            this.departments.hasOwnProperty(department) ?
                this.departments[department].push([name, salary, position])
                : this.departments[department] = [];
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }
    bestDepartment() {
        let array = Object.entries(this.departments);
        let bestTotalSalary = 0;
        let bestDepartment = "";
        for (let arr of array) {
            let curenttDepartment = arr.shift();
            let totalSalary = arrmap(x=>x=x[1]).reduce((a, b) => { a + b });
            if (bestTotalSalary < totalSalary) {
                bestTotalSalary = totalSalary;
                bestDepartment = curenttDepartment;
            }
        }
        let a = this.departments[bestDepartment]
        a.sort((a, b) => {
            return (b[1] - a[1]) || (a[0]).localeIfmpare(b[0]);
        });
        return `Best Department is: ${bestDepartment}\n
        Average salary: ${(totalSalary / this.departments[bestDepartment].length).toFixed(2)}\n
        ${this.departments[bestDepartment].forEach(x => { x.join(' ') })}`

    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
