function showLevel() {
    var levelContainer = document.getElementsByClassName(".levelContainer");
   
    for (var i=0; i<levelContainer.length; i++){
        levelContainer[i].classList.add("active");
    }

    // Reduce font size for .subject i
    document.getElementsByClassName(".subject i").style.fontSize = "20px";

    //Hide Subject title
    document.getElementsByClassName(".subject-title").style.display = "none";


}

function hideLevel() {
    var levelContainer = document.getElementsByClassName(".levelContainer");
    
    for (var i=0; i<levelContainer.length; i++){
        levelContainer[i].classList.remove("active");
    }

    // Restore font size for .subject i
    document.getElementsByClassName(".subject i").style.fontSize = "50px";

    //Restore Subject title
    document.getElementsByClassName(".subject-title").style.display = "block";
}
/* 
function showLevel() {
    var levelContainer = document.querySelectorAll(".levelContainer");

    for (var i=0; i<levelContainer.length; i++){
        levelContainer[i].classList.add("active");
    }

    // Reduce font size for .subject i
    var subjectIcon = document.getElementsByClassName(".subject i");
    subjectIcon.style.fontSize = "20px";

    //Hide Subject title
    const subjectTitle = document.getElementsByClassName(".subject-title");
    subjectTitle.style.display = "none";


}

function hideLevel() {
    var levelContainer = document.querySelectorAll(".levelContainer");

    for (var i=0; i<levelContainer.length; i++){
        levelContainer[i].classList.remove("active");
    }

    // Restore font size for .subject i
   var subjectIcon = document.querySelectorAll(".subject i");
   subjectIcon.style.fontSize = "50px";

    //Restore Subject title
    const subjectTitle = document.getElementsByClassName(".subject-title");
    subjectTitle.style.display = "block";
} */
