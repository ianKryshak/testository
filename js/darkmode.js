const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = darkModeToggle.querySelector("i");
const body = document.body;

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeIcon.classList.replace("fa-moon", "fa-sun");
}

// Toggle on click
darkModeToggle.addEventListener("click", (e) => {
    e.preventDefault(); // prevent jump
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeIcon.classList.replace("fa-sun", "fa-moon");
    }
});
