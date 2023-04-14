window.onload = function () {
    console.log("Ready")
    var spaceman = document.querySelector("#orbit-astronaut");
    spaceman.style.position = "absolute";

    var clicks = 0;

    spaceman.addEventListener("click", function (e) {
        clicks += 1;
        if (clicks % 4 == 0) {
            if (e.target.style.position == "fixed") {
                e.target.style.position = "absolute";
            } else if (e.target.style.position == "absolute") {
                e.target.style.position = "fixed";
            } else {
                e.target.style.position = "absolute";
            }
        }
    })
}