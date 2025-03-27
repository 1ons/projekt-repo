document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const counterElement = document.getElementById("counter");
    const homaImage = document.getElementById("homaImage");
    const clickButton = document.getElementById("clickButton");

    const thresholds = [10, 100, 1000, 10000]; 
    let shiftIndex = 0; 

    clickButton.onclick = function() {
        count++;
        counterElement.textContent = count;

        if (shiftIndex < thresholds.length && count >= thresholds[shiftIndex]) {
            homaImage.style.transform = `translateX(${(shiftIndex + 1) * 2}px)`;
            shiftIndex++; 
        }
    };
});
