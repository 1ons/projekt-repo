document.addEventListener("DOMContentLoaded", function() {
    let questions = document.querySelectorAll(".question-title");

    questions.forEach((question) => {
        question.addEventListener("click", function() {
            let content = this.nextElementSibling;
            let marker = this.querySelector(".marker");

            if (content.style.display === "block") {
                content.style.display = "none";
                marker.textContent = "▼";
            } else {
                content.style.display = "block";
                marker.textContent = "▲";
            }
        });
    });
});