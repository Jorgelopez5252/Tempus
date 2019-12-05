google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(employeeTable);

function employeeTable() {

    $.ajax({
        method: "GET",
        url: "/api/users"
    }).then(function (data) {
        const employees = data.map(employee => 
            [employee.id, `${employee.firstname} ${employee.lastname}`, employee.title, employee.salary, "X"]
        );
        // const employees = data.map(employee => Object.values(employee));
        console.log(employees);
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'ID');
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Title');
        data.addColumn('number', 'Salary');
        data.addColumn('string', '');
        //   data.addColumn('number', 'Sales Today');
        //   data.addColumn('boolean', 'Full Time Employee');
        //   data.addColumn('string', '');
        data.addRows(employees);
        //   data.addRows([


        data.setColumnProperty(4, "className", "deleteCol has-text-centered");

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


            if (col == 4 && deleteColumn == "X") {
                console.log("new");
                // console.log(col);
                $.ajax({
                    method: "DELETE",
                    url: "/api/users/" + rowId,
                }).then(function (data) {
                    
                });
                window.location = "/employeeTable";
            }
        }

        var cssClassNames = {
            'headerRow': 'headerRow',
            'tableRow': '',
            'oddTableRow': 'beige-background',
            'selectedTableRow': 'orange-background large-font',
            'hoverTableRow': '',
            'headerCell': 'headerCell has-text-centered',
            'tableCell': '',
            'rowNumberCell': 'underline-blue-font'};
            

        var table = new google.visualization.Table(document.getElementById('table_div'));
        google.visualization.events.addListener(table, 'select', function () {
            selectHandler(table);
        });

        var formatter = new google.visualization.ColorFormat();
        formatter.addRange("A", "Z", 'white', 'red');
        formatter.format(data, 4);

        table.draw(data, { allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;", 'cssClassNames': cssClassNames });
    })
}