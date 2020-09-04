/*obtener el link style*/
var cssDarkMode = document.getElementsByName('cssDarkMode');
/*obtener el valor de darkmode de localstorage*/
if (localStorage.getItem('Iag_Web_DarkMode')) {
    let darkmode = localStorage.getItem('Iag_Web_DarkMode');
    if (darkmode == 'true') {
        cssDarkMode[0].setAttribute("href", "css/styleDarkMode.css");
    } else {
        cssDarkMode[0].setAttribute("href", "");
    }
} else {
    localStorage.setItem('Iag_Web_DarkMode', 'false');
}
/*agregar listener solo si estoy en index*/
if (document.getElementById('index')) {
    var botonDarkMode = document.getElementById('btnDarkMode');

    botonDarkMode.addEventListener('click', function () {
        let darkmode = localStorage.getItem("Iag_Web_DarkMode");
        if (darkmode == 'false') {
            cssDarkMode[0].setAttribute("href", "css/styleDarkMode.css");
            localStorage.setItem('Iag_Web_DarkMode', 'true');
        } else {
            cssDarkMode[0].setAttribute("href", "");
            localStorage.setItem('Iag_Web_DarkMode', 'false');
        }
    });
}