function showLevel(event) {
    const currentSubject = event.currentTarget;

    // Add the 'active' class to the current subject
    currentSubject.querySelector(".levelContainer").classList.add("active");

    // Reduce font size for the current subject's icon
    currentSubject.querySelector("i").style.fontSize = "20px";

    // Hide the title of the current subject
    currentSubject.querySelector(".subject-title").style.display = "none";
}

function hideLevel(event) {
    const currentSubject = event.currentTarget;

    // Remove the 'active' class from the current subject
    currentSubject.querySelector(".levelContainer").classList.remove("active");

    // Restore font size for the current subject's icon
    currentSubject.querySelector("i").style.fontSize = "50px";

    // Restore the title of the current subject
    currentSubject.querySelector(".subject-title").style.display = "block";
}

// Add event listeners
const subjects = document.querySelectorAll('.subject');
subjects.forEach(function(subject) {
    subject.addEventListener('mouseenter', showLevel);
    subject.addEventListener('mouseleave', hideLevel);
});


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.querySelector('.menu-container');
  
    menuToggle.addEventListener('click', function () {
      menuContainer.classList.toggle('show-mobile-menu');
    });
  });
  
