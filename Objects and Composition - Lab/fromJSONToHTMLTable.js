function fromJSONToHTMLTable(data) {
    let arr = JSON.parse(data);   //обръщам стринга в масив
    let simbols = {                 //обект с проблемни символи
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    };
    function escaped(input){        //функция която провеява и заменя проблемни символи
        let str=(input).toString();
        let pattern = /[&<>"']/g;
        return str.replace(pattern,((x)=>simbols[x]))
    }

    let keys = Object.keys(arr[0]);         
    let res = `<table>\n`;
    res += `\t<tr>`
    for (let key of keys) {
        res += `<th>${escaped(key)}</th>`
    }
    res += `</tr>\n`
    for (let obj of arr) {
        res += `\t<tr>`
        for (let key of keys) {
            res += `<td>${escaped(obj[key])}</td>`
        }
        res += `</tr>\n`
    }
    res += '</table>'
    return res
}
console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`));
console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`))
/*<table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
</table>
*/