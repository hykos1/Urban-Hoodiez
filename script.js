document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const intro = document.getElementById("intro");
        const home = document.getElementById("home");

        if (intro && home) {
            // Fade out intro
            intro.style.opacity = "0";

            // Wait for fade-out to complete before hiding intro and showing home
            setTimeout(() => {
                intro.style.display = "none"; // Hide intro
                home.style.display = "flex"; // Show home (flex to maintain layout)
                setTimeout(() => {
                    home.style.opacity = "1"; // Fade in home
                }, 50); // Delay to allow display change to take effect
            }, 1000); // Matches the CSS transition duration (1s)
        } else {
            console.error("Elementele #intro sau #home nu există în HTML.");
        }
    }, 500); // Wait 2.5 seconds before starting transition
});
