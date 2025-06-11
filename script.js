// Manoush and Vishwa
// June 12 2025
// summativeAssignmentTEJ3M - index.html
// This is the javascript for our summative ISU website (specifcally the home page)

//function for the button on home page
function show_about_us() {
  var x = document.getElementById("about_us");
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.alignItems = "right";
  }
  else {
    x.style.display = "none";
  }
}