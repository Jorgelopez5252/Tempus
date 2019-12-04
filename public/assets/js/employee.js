google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(employeeTable);

function employeeTable() {

    $.ajax({
        method: "GET",
        url: "/api/users"
    }).then(function (data) {

        const employees = data.map(employee => Object.values(employee));
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'ID');
        data.addColumn('string', 'First Name');
        data.addColumn('string', 'Last Name');
        data.addColumn('string', 'Title');
        data.addColumn('number', 'Salary');
        data.addColumn('string', '');
        //   data.addColumn('number', 'Sales Today');
        //   data.addColumn('boolean', 'Full Time Employee');
        //data.addColumn('string', '');
        data.addRows(employees);
        //   data.addRows([


        data.setColumnProperty(5, "className", "deleteCol has-text-centered");

        function selectHandler() {
            var selection = table.getSelection();
            console.log("Test");
            if (selection.length === 0) {
                console.log("Nothing");
                return;
            }

            var cell = event.target; //get selected cell
            rows = selection[0].row;
            col = cell.cellIndex;
            rowId = data.getFormattedValue(rows, 0);
            deleteColumn = data.getFormattedValue(rows, col);
            console.log(col);
            console.log(rowId);
            console.log(deleteColumn);


            if (col == 5 && deleteColumn == "X") {
                console.log("new");
                // console.log(col);
                $.ajax({
                    method: "DELETE",
                    url: "/api/users/" + rowId,
                }).then(function (data) {
                    console.log(data);

                });
            }
        }

        function selectHandler(table) {
            var selection = table.getSelection();
            if (selection.length === 0)
                return;

            var cell = event.target; //get selected cell
            row = selection[0].row;
            col = cell.cellIndex;
            if (cell.cellIndex >= 3 & cell.cellIndex <= 9) {
                cell.contentEditable = true;
                //   cell.addEventListener('blur', checkSalary);
            }
            table.setSelection([]);
        }

        var table = new google.visualization.Table(document.getElementById('table_div'));
        google.visualization.events.addListener(table, 'select', function () {
            selectHandler(table);
        });

        var formatter = new google.visualization.ColorFormat();
        formatter.addRange("A", "Z", 'white', 'red');
        formatter.format(data, 5);

        table.draw(data, { allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;" });
    })
}