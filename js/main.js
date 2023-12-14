function showLevel(event) {
    var currentSubject = event.currentTarget;

    // Add the 'active' class to the current subject
    currentSubject.querySelector(".levelContainer").classList.add("active");

    // Reduce font size for the current subject's icon
    currentSubject.querySelector("i").style.fontSize = "20px";

    // Hide the title of the current subject
    currentSubject.querySelector(".subject-title").style.display = "none";
}

function hideLevel(event) {
    var currentSubject = event.currentTarget;

    // Remove the 'active' class from the current subject
    currentSubject.querySelector(".levelContainer").classList.remove("active");

    // Restore font size for the current subject's icon
    currentSubject.querySelector("i").style.fontSize = "50px";

    // Restore the title of the current subject
    currentSubject.querySelector(".subject-title").style.display = "block";
}

// Add event listeners
var subjects = document.querySelectorAll('.subject');
subjects.forEach(function(subject) {
    subject.addEventListener('mouseenter', showLevel);
    subject.addEventListener('mouseleave', hideLevel);
});
