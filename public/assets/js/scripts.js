$(document).ready(function () {

    var dropdown = document.querySelector('.dropdown');
    $(".dropdown").on('click', function (event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
    });

    getUsers();
    function getUsers() {
        $.get("/api/users", function (data) {
        });
    }

        getUserHours();
        function getUserHours() {
            $.get("/api/userhours", function (data) {
                console.log("done");
            });
        }


        $('#add-employee-btn').on("click", function () {
            window.location = '/employeeTable/#addEmployee'
        });

        $('.deleteCol').on("click", function () {
            window.location = '/employeeTable'
        });

        $('.close-modal').on("click", function () {
            window.location = '/employeeTable'
        });

        $('.close-modal').on("click", function () {
            window.location = '/employeeTable'
        });

});
