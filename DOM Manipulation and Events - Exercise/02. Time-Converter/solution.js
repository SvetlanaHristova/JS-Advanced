function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type="button"]');

    for (let button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(element) {
        let input = Number(element.target.previousElementSibling.value);
        let units = element.target.id;
        let seconds = 0;

        switch (units) {
            case "daysBtn":
                seconds = input * 24 * 60 * 60;
                post(seconds);
                break;
            case "hoursBtn":
                seconds = input * 60 * 60;
                post(seconds);
                break;
            case "minutesBtn":
                seconds = input * 60;
                post(seconds);
                break;
            case "secondsBtn":
                seconds = input;
                post(seconds);
                break;
        }

    }
    function post(seconds) {
        let filds = document.querySelectorAll('input[type=text]');
        let value = 0;

        for (let fild of filds) {

            switch (fild.id) {
                case "days": current = seconds / 24 / 60 / 60; break;
                case "hours": current = seconds / 60 / 60; break;
                case "minutes": current = seconds / 60; break;
                case "seconds": current = seconds; break;
            }
            
            fild.value = current;
        }
    }
}
