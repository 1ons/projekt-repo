document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "auto";
    
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    
    const elements = document.querySelectorAll("section, div, p, h1, h2, h3, h4, h5, h6, img, ul, li, button, input, textarea, a");

    elements.forEach(el => el.classList.add("fade-in"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
