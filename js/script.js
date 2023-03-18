let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "style/dark-mode.css") {
        theme.href = "style/light-mode.css";
    } else {
        theme.href = "style/dark-mode.css";
    }
}
