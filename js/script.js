const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,0.7)";
    } else {
        header.style.background = "rgba(255,255,255,0.95)";
    }

    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});