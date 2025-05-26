// Dark Mode Toggle
const darkModeButton = document.getElementById("darkModeToggle");
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Search Bar Functionality
function filterCourses() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let courses = document.getElementsByClassName("course");

    for (let i = 0; i < courses.length; i++) {
        let title = courses[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (title.includes(input)) {
            courses[i].style.display = "block";
        } else {
            courses[i].style.display = "none";
        }
    }
}

// Alert on Course Selection
function selectCourse(Smart Learning AI) {
    alert("You have selected: " + Smart Learning AI);
}