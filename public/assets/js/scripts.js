$(document).ready(function(){
  
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});


getUsers();
function getUsers() {
    $.get("/api/users", function(data) {
    });
  }

  getUserHours();
  function getUserHours() {
    $.get("/api/userhours", function (data) {
        //    console.log(data);
        console.log("done");
    });
}


  $('#add-employee-btn').on("click", function() {
      window.location = '/employeeTable/#addEmployee'
  });
  
  $('.close-modal').on("click", function() {
      window.location = '/employeeTable'
  });

  if(window.location.href.indexOf('#addEmployee') != -1) {
    $('#addEmployee').addClass('is-active');
  }
})

        // $(".sidebarNav").on("click", function() {
        //     if ($(this).text() == "Dashboard") {
        //         window.location = '/Home';
        //         $(".pageName").text("Dashboard");
        //     }
        //     else if ($(this).text() == "Employees") {
        //         window.location = '/employeeTable';
        //         $(".pageName").text("Empoloyees");
        //     } else if ($(this).text() == "Hours") {
        //         window.location = '/hours'
        //         $(".pageName").text("Employee Hours");
        //     } else {
        //         alert("There was an error populating the information");
        //     }
                
        //     });