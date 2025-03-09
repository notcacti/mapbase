console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {
    // Hive
    const logo = document.getElementById("logo");
    const button = document.getElementById("hivebtn");

    logo.addEventListener("click", () => {
        logo.style.transform = "translateY(-200px)";
        logo.style.scale = `38% 38%`;

        button.style.opacity = "1";
        button.style.visibility = "visible";
        button.style.top = "60%";
    });

    button.addEventListener("click", () => {
        window.location.pathname = "/../views/hive/index.html";
    });

    // Hypixel
    const hlogo = document.getElementById("hypixel");
    const hbutton = document.getElementById("hypixelbtn");

    hlogo.addEventListener("click", () => {
        hlogo.style.transform = "translateY(-30px)";
        hlogo.style.scale = `120% 120%`;

        hbutton.style.opacity = "1";
        hbutton.style.visibility = "visible";
        hbutton.style.top = "60%";
    });

    hbutton.addEventListener("click", () => {
        window.location.pathname = "/../views/hypixel/index.html";
    });

    // Hive
    const mlogo = document.getElementById("mmc");
    const mbutton = document.getElementById("mmcbtn");

    mlogo.addEventListener("click", () => {
        mlogo.style.transform = "translateY(-200px)";
        mlogo.style.scale = `38% 38%`;

        mbutton.style.opacity = "1";
        mbutton.style.visibility = "visible";
        mbutton.style.top = "60%";
    });

    mbutton.addEventListener("click", () => {
        window.location.pathname = "/../views/mmc/index.html";
    });
});
