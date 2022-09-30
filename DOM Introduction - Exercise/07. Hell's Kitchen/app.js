function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);
      let result = [];

      for (let element of input) {
         let [restaurantName, workersList] = element.split(' - ');
         if (!result.find(x => x.name === restaurantName)) {
            result.push({
               name: restaurantName,
               totalSalary: 0,
               countWorkars: 0,
               personal: {}
            });
         }
         let curentRestaurant = result.find(x => x['name'] === restaurantName);
         let personalInfo = workersList.split(', ')
         for (let el of personalInfo) {
            let [worker, salary] = el.split(' ');
            curentRestaurant.personal[`${worker}`] = Number(salary);
            curentRestaurant.totalSalary += Number(salary);
            curentRestaurant.countWorkars++;
         }
      }
      let best = result.sort((a, b) => {
         return b.totalSalary / b.countWorkars - a.totalSalary / a.countWorkars
      })[0];
      let bestRestaurant = best.name;
      let averageSalary = (best.totalSalary / best.countWorkars).toFixed(2);
      let personalArr = Object.entries(best.personal);
      personalArr.sort(([aA, aB], [bA, bB]) => { return bB - aB });
      let textResultat = "";
      let bestSalary = personalArr[0][1];
      for (let arr of personalArr) {
         textResultat += `Name: ${arr[0]} With Salary: ${arr[1]} `
      }
      document.querySelector("#bestRestaurant p").textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalary} Best Salary: ${bestSalary.toFixed(2)}`;
      document.querySelector("#workers p").textContent = textResultat;
      }

}
