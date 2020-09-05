/*obtener el link style*/
var cssDarkMode = document.querySelector('.cssDarkMode');
/*obtener el input darkmode*/
var botonDarkMode = document.querySelector('.cabecera__contenedorDarkMode-input');
/*obtener el valor de darkmode de localstorage*/
if (localStorage.getItem('Iag_Web_DarkMode')) {
    let darkmode = localStorage.getItem('Iag_Web_DarkMode');
    if (darkmode == 'true') {
        cssDarkMode.setAttribute("href", "css/styleDarkMode.css");
        botonDarkMode.setAttribute("value", "1");
    } else {
        cssDarkMode.setAttribute("href", "");
        botonDarkMode.setAttribute("value", "0");
    }
} else {
    localStorage.setItem('Iag_Web_DarkMode', 'false');
}
/*si cambia el estado del imput darkmode, se modifica el vinculo con css*/
botonDarkMode.addEventListener('change', function () {
    let darkmode = localStorage.getItem("Iag_Web_DarkMode");
    if (darkmode == 'false') {
        cssDarkMode.setAttribute("href", "css/styleDarkMode.css");
        localStorage.setItem('Iag_Web_DarkMode', 'true');
    } else {
        cssDarkMode.setAttribute("href", "");
        localStorage.setItem('Iag_Web_DarkMode', 'false');
    }
});