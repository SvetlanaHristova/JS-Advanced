function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            return this.treasury += this.population *this.taxRate;
        },
        applyGrowth: function (percentage) {
            return this.population += this.population * percentage * 0.01;
        },
        applyRecession: function (percentage) {
            return this.treasury *= (1 - percentage * 0.01);
        }
    }
}
/*const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);
*/
/*const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
*/
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyRecession(5);
console.log(city.treasury);

