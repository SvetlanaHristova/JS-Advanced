function solve() {

    let type=document.getElementById("selectMenuTo")
    let options=document.getElementById("selectMenuTo").children[0]
    let binary=options.cloneNode()
    let hexadecimal=type.cloneNode()
    binary.appendChild(type)
    hexadecimal.appendChild(type)
}