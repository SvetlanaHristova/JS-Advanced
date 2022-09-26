function assemblyLine() {
    return {
        hasClima: (obj) => {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = () => {
                if (temp < tempSettings) {
                    temp++;
                } if (temp > tempSettings) {
                    temp--;
                }
            }
        },
        hasAudio: (obj) => {
            obj.currentTrack = {
                name: "",
                artist: ""
            };
            obj.nowPlaying = () => {
                if (currentTrack) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        },
        hasParktronic: (obj) => {
            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }

            }
        }
    }
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

console.log(myCar);
