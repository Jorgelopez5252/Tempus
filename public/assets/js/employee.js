google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(employeeTable);

function employeeTable() {

    $.ajax({
        method: "GET",
        url: "/api/users"
    }).then(function (data) {
        const employees = data.map(employee => Object.values(employee));
        console.log(employees);

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'ID');
        data.addColumn('string', 'First Name');
        data.addColumn('string', 'Last Name');
        data.addColumn('string', 'Title');
        //   data.addColumn('number', 'Sales Today');
        data.addColumn('number', 'Salary');
        //   data.addColumn('boolean', 'Full Time Employee');
        //data.addColumn('string', '');
        data.addRows(employees);
        //   data.addRows([
        // [3, 'Jim', 'Carey', 'Stocker', {d: 1000,  f: '$1,000'},   {v:8000,   f: '$8,000'},  true, '<i class="fas fa-pencil-alt"></i>'],
        //   ]);
        // data.setCell(22, 2, 15, "Fifteen", {style: "font-style:bold; font-size: 30px;"});

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

        table.draw(data, { allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;" });
    })
}