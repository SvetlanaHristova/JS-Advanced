function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.getElementById("inputs").children[1].value);
      let result = [];

      for (let element of input) {
         let [restaurantName, workersList] = element.split(' - ');
         if (!result.find(x => x.name = restaurantName)) {
            let obj = {
               name: restaurantName,
               totalSalary: 0,
               countWorkars: 0,
               personal: {}
            }
         }
         let personalInfo = workersList.split(', ')
         for (let el of personalInfo) {
            let [worker, salary] = el.split(' ');
            obj.personal[`${worker}`] = Number(salary);
            obj.totalSalary += Number(salary);
            obj.countWorkars++;
         }
         result.push(obj);
      }

      let best = result.sort((a, b) => {
         return b.totalSalary / b.countWorkars - a.totalSalary / a.countWorkars
      })[0];
      let bestRestaurant = best.name;
      let averageSalary = best.totalSalary / best.countWorkars;
      let personalArr = Object.from.entries(best.personal);
   }
}
debugger;
//["PizzaHut - Peter 500, George 300, Mark 800",
//"TheLake - Bob 1300, Joe 780, Jane 660"]

