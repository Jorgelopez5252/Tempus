$(document).ready(function(){
  
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

$(".sidebarNav").on("click", function() {
    if ($(this).text() == "Dashboard") {
        $("#chart").attr("src", "/assets/js/dashboard.js");
    }
    else if ($(this).text() == "Employees") {
        $("#chart").attr("src", "/assets/js/employee.js");
    } else if ($(this).text() == "Hours") {
        $("#chart").attr("src", "/assets/js/empHours.js");
    } else {
        alert("There was an error populating the information");
    }
        
    });
 

getUsers();
function getUsers() {
    $.get("/api/users", function(data) {
//    console.log(data);
      console.log("done");
    });
  }

})