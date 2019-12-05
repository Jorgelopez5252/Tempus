$(document).ready(function () {


    getUsers();
    function getUsers() {
        $.get("/api/users", function (data) {
        });

        getUserHours();
        function getUserHours() {
            $.get("/api/userHours", function (data) {
                //    console.log(data);
                console.log("done");
            });
        }


        $('#add-employee-btn').on("click", function () {
            window.location = '/employeeTable/#addEmployee'
        });

        $('.close-modal').on("click", function () {
            window.location = '/employeeTable'
        });

        if (window.location.href.indexOf('#addEmployee') != -1) {
            $('#addEmployee').addClass('is-active');
        }
    }
});
