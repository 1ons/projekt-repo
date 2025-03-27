document.addEventListener("DOMContentLoaded", () => {
    const featuresContainer = document.getElementById("featuresContainer");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const cardWidth = 210;
    let scrollAmount = 0;
    const cards = Array.from(featuresContainer.children);
    
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        featuresContainer.appendChild(clone);
    });

    function moveNext() {
        scrollAmount += cardWidth;
        featuresContainer.style.transition = "transform 0.3s ease-in-out";
        featuresContainer.style.transform = `translateX(-${scrollAmount}px)`;

        setTimeout(() => {
            if (scrollAmount >= cardWidth * cards.length) {
                scrollAmount = 0;
                featuresContainer.style.transition = "none";
                featuresContainer.style.transform = `translateX(0)`;
            }
        }, 300); 
    }

    function movePrev() {
        if (scrollAmount <= 0) {
            scrollAmount = cardWidth * cards.length;
            featuresContainer.style.transition = "none";
            featuresContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
        setTimeout(() => {
            scrollAmount -= cardWidth;
            featuresContainer.style.transition = "transform 0.3s ease-in-out";
            featuresContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }, 10);
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);
});
