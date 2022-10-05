function filterEmployees(data, criteria) {
    let [key, value] = criteria.split('-');
    let n = 0;
    
    return JSON.parse(data)
        .filter(x => x[key] === value)
        .forEach((element) => {
            console.log(`${n++}. ${element.first_name} ${element.last_name} - ${element.email}`)
        });

}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'

)