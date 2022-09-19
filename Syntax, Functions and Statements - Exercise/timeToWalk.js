function timeToWalk(steps, footLength, speed) {
    let rowd = steps * footLength;
    let breakTime = Math.floor(rowd / 500);
    let time = Math.ceil((rowd / 1000 / speed) * 3600) + breakTime * 60;
    let sec = time % 60;
    let min = (time - sec) / 60
    let hours = (time - min * 60 - sec);
    
    sec < 10 ? sec = `0${sec}` : sec = `${sec}`;
    min < 10 ? min = `0${min}` : min = `${min}`;
    hours < 10 ? hours = `0${hours}` : hours = `${hours}`

    console.log(`${hours}:${min}:${sec}`)

}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)