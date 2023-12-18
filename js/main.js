/* function showLevel() {
    var levelContainer = document.getElementsByClassName("levelContainer");
   
    for (var i=0; i<levelContainer.length; i++){
        levelContainer[i].classList.add("active");
    }

    if(levelContainer.classList.contains("active")){
        // Reduce font size for .subject i
    document.getElementsByClassName("subject i").style.fontSize = "20px";

    //Hide Subject title
    document.getElementsByClassName("subject-title").style.display = "none";
    }
    else{
         // Restore font size for .subject i
    document.getElementsByClassName("subject i").style.fontSize = "50px";

    //Restore Subject title
    document.getElementsByClassName("subject-title").style.display = "block";
    }

}

function hideLevel() {
    var levelContainer = document.getElementsByClassName("levelContainer");
    
    for (var i=0; i<levelContainer.length; i++){
        levelContainer[i].classList.remove("active");
    }
   
    if(levelContainer.classList.contains("active")){
         // Restore font size for .subject i
    document.getElementsByClassName("subject i").style.fontSize = "50px";

    //Restore Subject title
    document.getElementsByClassName("subject-title").style.display = "block";
    }
    else{
        // Reduce font size for .subject i
    document.getElementsByClassName(".subject i").style.fontSize = "20px";

    //Hide Subject title
    document.getElementsByClassName(".subject-title").style.display = "none";
    }
   
} */

/* function showLevel() {
    var levelContainers = document.getElementsByClassName("levelContainer");
    
    for (var i = 0; i < levelContainers.length; i++) {
        levelContainers[i].classList.add("active");
    }

    // Reduce font size for .subject i
    var subjectIcons = document.getElementsByClassName("subject").querySelectorAll("i");
    for (var j = 0; j < subjectIcons.length; j++) {
        subjectIcons[j].style.fontSize = "20px";
    }

    // Hide Subject title
    document.getElementsByClassName("subject-title").style.display = "none";
}

function hideLevel() {
    var levelContainers = document.getElementsByClassName("levelContainer");
    
    for (var i = 0; i < levelContainers.length; i++) {
        levelContainers[i].classList.remove("active");
    }

    // Restore font size for .subject i
    var subjectIcons = document.getElementsByClassName("subject").querySelectorAll("i");
    for (var j = 0; j < subjectIcons.length; j++) {
        subjectIcons[j].style.fontSize = "50px";
    }

    // Restore Subject title
    document.getElementsByClassName("subject-title").style.display = "block";
} */
/* function showLevel() {
    var levelContainers = document.getElementsByClassName("levelContainer");
    
    for (var i = 0; i < levelContainers.length; i++) {
        levelContainers[i].classList.add("active");
        document.getElementsByClassName("subject i")[i].style.fontSize = "20px";
        document.getElementsByClassName("subject-title")[i].style.display = "none";

    }
}

function hideLevel() {
    var levelContainers = document.getElementsByClassName("levelContainer");
    
    for (var i = 0; i < levelContainers.length; i++) {
        levelContainers[i].classList.remove("active");
        document.getElementsByClassName("subject i")[i].style.fontSize = "50px";
        document.getElementsByClassName("subject-title")[i].style.display = "block";

    }
}
 */

/* second code

function showLevel() {
    var levelContainers = document.querySelectorAll(".levelContainer");

    for (var i = 0; i < levelContainers.length; i++) {
        levelContainers[i].classList.add("active");
    }

    var subjectIcons = document.querySelectorAll(".subject i");
    for (var j = 0; j < subjectIcons.length; j++) {
        subjectIcons[j].style.fontSize = "20px";
    }

    var subjectTitles = document.querySelectorAll(".subject-title");
    for (var k = 0; k < subjectTitles.length; k++) {
        subjectTitles[k].style.display = "none";
    }
}

function hideLevel() {
    var levelContainers = document.querySelectorAll(".levelContainer");

    for (var i = 0; i < levelContainers.length; i++) {
        levelContainers[i].classList.remove("active");
    }

    var subjectIcons = document.querySelectorAll(".subject i");
    for (var j = 0; j < subjectIcons.length; j++) {
        subjectIcons[j].style.fontSize = "50px";
    }

    var subjectTitles = document.querySelectorAll(".subject-title");
    for (var k = 0; k < subjectTitles.length; k++) {
        subjectTitles[k].style.display = "block";
    }
}

// Add event listeners
var subjects = document.querySelectorAll('.subject');
subjects.forEach(function(subject) {
    subject.addEventListener('mouseenter', showLevel);
    subject.addEventListener('mouseleave', hideLevel);
});
 */

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
