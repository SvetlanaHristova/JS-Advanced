function roadRadar(speed, area) {
    let limit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let difference = speed - limit[`${area}`];

    limit[`${area}`] >= speed ?
        console.log(`Driving ${speed} km/h in a ${limit[`${area}`]} zone`)
        : console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit[`${area}`]} - ${status(difference)}`);

    function status(speeding) {
        if (speeding <= 20) {
            return 'speeding';
        } else if (speeding <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway')
