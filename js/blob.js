const blob = document.getElementById("main-blob");
const logo = document.getElementById("main-logo");
const dragTarget = document.getElementById("drag-logo-here");

document.body.onpointermove = event => {
    const { pageX, pageY } = event;

    // Blob follow mouse
    blob.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
    }, { duration: 3000, fill: "forwards" });
};

logo.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id)
});

dragTarget.addEventListener("dragover", (event) => {
    event.preventDefault();
});

dragTarget.addEventListener("drop", (event) => {
    event.preventDefault();
    if(event.dataTransfer.getData("text/plain") == "main-logo") {
        blob.style.display == "none" || blob.style.display == "" ? blob.style.display = "block" : blob.style.display = "none";
        console.log(blob.style.display == "");
    }
})