console.log("Abcia2 :D")
let pathname = window.location.pathname;

document.addEventListener("DOMContentLoaded", function () {
    let FadeInLayer = document.querySelector(".FadeInLayer");
    FadeInLayer.style.transition = "opacity 1s";
    FadeInLayer.style.opacity = 0;
    setTimeout(() => {
        FadeInLayer.classList.add("Hidden")
    }, 400);
});

    let StoreLinkButtonPlayStore = document.getElementById("StoreLinkButtonPlayStore");
    StoreLinkButtonPlayStore.addEventListener("click", function () {
        window.location.href = "https://play.google.com/store/apps/details?id=com.Abcia2.FruityDropper"
    })

    let GameCardLigl = document.getElementById("GameCardLigl");
    let GameCardHr = document.getElementById("GameCardHr");
    //let GameCardCcm = document.getElementById("GameCardCcm");
    let GameCardRc = document.getElementById("GameCardRc");

    GameCardLigl.addEventListener("click", function () {
        window.location.href = "https://life-in-gacha-life-website.web.app"
    })
    GameCardHr.addEventListener("click", function () {
        window.location.href = "https://hoops-runs-website.web.app"
    })
    /*GameCardCcm.addEventListener("click", function () {
        window.location.href = "../CuteCardMatch/index.html"
    })*/
    GameCardRc.addEventListener("click", function () {
        window.location.href = "../RainbowCrash/index.html"
    })

