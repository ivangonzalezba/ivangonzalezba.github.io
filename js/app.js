localStorage.setItem('Iag_Web_DarkMode', 'false');
var cssDarkMode = document.getElementById('cssDarkMode');
var botonDarkMode = document.getElementById('btnDarkMode');

botonDarkMode.addEventListener('click', function () {
    let darkmode = localStorage.getItem("Iag_Web_DarkMode");
    if (darkmode == 'false') {
        cssDarkMode.setAttribute("href", "css/styleDarkMode.css");
        localStorage.setItem('Iag_Web_DarkMode', 'true');
    } else {
        cssDarkMode.removeAttribute("href");
        localStorage.setItem('Iag_Web_DarkMode', 'false');
    }
});