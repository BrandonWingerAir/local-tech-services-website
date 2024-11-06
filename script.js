// Click to show phone number
function showElement() {
    var element = document.getElementById("click-to-show");
    element.style.display = "none";

    var element = document.getElementById("phone-number");
    element.style.display = "block";
}

// Footer Icon Animations
function hover(element) {
    var element = document.getElementById("cat")
    element.setAttribute('src', 'images/cat-2.webp');
}

function unhover(element) {
    var element = document.getElementById("cat")
    element.setAttribute('src', 'images/cat-1.webp');
}

function showHearts() {
    var element = document.getElementById("hearts")
    element.style.display = "block";
    setTimeout(hideHearts, 7000);
}

function hideHearts() {
    var element = document.getElementById("hearts")
    element.style.display = "none";
}