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
                : this.departments[department] = [[name, salary, position]];
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }
    bestDepartment() {

        let bestDepartment = "";
        let bestSalary = 0;
        let avSalary = 0;
        for (let element in this.departments) {
            let curentDepartment = element;
            let totalSalary = 0;
            let count=0;
            for (let el of this.departments[element]) {
                totalSalary += el[1];
                count++;
            }
            let curentavSalary =(totalSalary / count).toFixed(2);
            if (avSalary < curentavSalary) {
                avSalary = curentavSalary;
                bestSalary = totalSalary;
                bestDepartment = curentDepartment;
            }
        }
        this.departments[bestDepartment].sort(([aA, aB, aC], [bA, bB, bC]) => {
            return bB - aB || (aA).localeCompare(bA);
        });
        let employees = "";
        for (let em of this.departments[bestDepartment]) {
            let str = em.join(' ')
            employees += str + '\n'
        }
        return `Best Department is: ${bestDepartment}\nAverage salary: ${avSalary}\n${employees.trim()}`;
    }
}
/*let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());*/

let c = new Company();
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());