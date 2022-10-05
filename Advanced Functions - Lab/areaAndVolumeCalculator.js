
function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let data = JSON.parse(input);
    let res = [];

    for (let el of data) {          //el={"x":"1","y":"2","z":"10"}
        let elArrea = area.call(el);
        let elVolue = vol.call(el);
        let obj = {

            area: elArrea,
            volume: elVolue
        }
        res.push(obj);
    }
    return res;
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))
