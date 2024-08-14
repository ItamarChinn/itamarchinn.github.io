let isButtonClicked = false;

function toggleNameHighlight(isHovered) {
    const elem = document.getElementById("name-highlight");
    if (isButtonClicked && isHovered) {
        elem.classList.remove("name-highlight")
        elem.classList.add("name-highlight2");
    } else {
        elem.classList.add("name-highlight");
        elem.classList.remove("name-highlight2");
    }
}


function hoverChanged(isHovered) {
    const img = document.getElementById("img");
    if (isButtonClicked) {
        img.src = isHovered ? "sketch.png" : "sketch_pink.png";
    } else {
        img.src = isHovered ? "sketch_pink.png" : "sketch.png";
    }
}

function changed() {
    const img = document.getElementById("img");
    isButtonClicked = !isButtonClicked;
    img.src = isButtonClicked ? "sketch_pink.png" : "sketch.png";

    const elements = document.querySelectorAll('[id^="exp"]');
    elements.forEach(element => {
        if (isButtonClicked) {
            if (element.id === "exp8" || element.id === "exp11") {
                element.classList.add("change_color2");
            } else if (element.id === "exp" || element.id === "exp10") {
                element.classList.add("change_color");
            } else {
                element.classList.add("a_color");
            }
        } else {
            element.classList.remove("change_color2", "change_color", "a_color");
        }
    });
}