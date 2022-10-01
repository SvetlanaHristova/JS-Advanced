function attachGradientEvents() {
    let gradientElemen = document.querySelector("#gradient");
    let persentResult = document.querySelector("#result");
    gradientElemen.addEventListener('mousemove', persentGradient);
    function persentGradient(x) {
        let offset = Math.floor(100 * x.offsetX / (x.target.clientWidth - 1));
        //това х.offseX е изместването, 300 и това не нам от къде е  

        persentResult.innerHTML = `${offset}%`;
    }
    //console.log(gradientElemen);
    //за да махнем резултата при излизане
    gradientElemen.addEventListener('mouseout', resClire);

    function resClire() {
        persentResult.innerHTML = "";
    }
}