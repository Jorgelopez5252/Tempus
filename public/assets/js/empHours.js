google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(employeeHours);

function employeeHours() {
  $.ajax({
    method: "GET",
    url: "/api/userHours"
  }).then(function (employeeData) {
    const employees = employeeData.map(employee => [employee.id, `${employee.user.firstname} ${employee.user.lastname}`, employee.weekNum, employee.sun,
    employee.mon, employee.tues, employee.wed, employee.thur, employee.fri, employee.sat, totalHours = employee.sun + employee.mon + employee.tues + employee.wed + employee.thur + employee.fri + employee.sat
    , "update"]);
    // console.log(employees[0][13].id)
    // Object.values(employee))
    // console.log(employees);
    let data = new google.visualization.DataTable();
    data.addColumn('number', 'User ID');
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Week');
    data.addColumn('number', 'Sun');
    data.addColumn('number', 'Mon');
    data.addColumn('number', 'Tues');
    data.addColumn('number', 'Wed');
    data.addColumn('number', 'Thur');
    data.addColumn('number', 'Fri');
    data.addColumn('number', 'Sat');
    data.addColumn('number', 'Total Hrs');
    data.addColumn('string', '');
    data.addRows(employees);


    data.setColumnProperty(11, "className", "updateCol has-text-centered");

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
      updateColumn = data.getFormattedValue(rows, col);

      if (cell.cellIndex >= 3 && cell.cellIndex <=9 ) {
        cell.contentEditable = true;
        cell.addEventListener('blur', validate);
      }
      table.setSelection([]);

      if (col == 11 && updateColumn == "update") {
        console.log("new");
        console.log(col);
        $.ajax({
            method: "PUT",
            url: "/api/userhours/" + rowId,
            data: {
              "sun": data.getValue(rows, 3),
              "mon": data.getValue(rows, 4),
              "tues": data.getValue(rows, 5),
              "wed": data.getValue(rows, 6),
              "thur": data.getValue(rows, 7),
              "fri": data.getValue(rows, 8),
              "sat": data.getValue(rows, 9),
              "totalHours": data.getValue(rows, 10)
            },
            
        }).then(function (data) {
          console.log("Save");            
        });
        // window.location = "/hours";
    }

    }  

    function validate(sender) {
      var rowIndex = sender.target.parentNode.rowIndex - 1;
      var hours = parseFloat(sender.target.innerHTML);
      
      if (!isNaN(hours)) {
        if (hours <= 24) {
          sender.target.innerHTML = hours;
          console.log("success");
          // document.getElementById('output').innerHTML = 'Salary successfully changed.';
          data.setCell(rowIndex, event.target.cellIndex, hours);
          drawTable();
        } else {
          sender.target.innerHTML = data.getFormattedValue(rowIndex, event.target.cellIndex);
          // document.getElementById('output').innerHTML = 'Error: Salary exceeded max.';
        }
      } else {
        console.log('error');
        // document.getElementById('output').innerHTML = 'Error: Salary not a number.';
      }
      sender.target.contentEditable = false;
      sender.target.removeEventListener('blur', validate);
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
    
    var table = new google.visualization.Table(document.getElementById('tableHours_div'));
    google.visualization.events.addListener(table, 'select', function () {
      selectHandler(table)
    });
    var formatter = new google.visualization.ColorFormat();
    formatter.addRange("a", "z", 'white', 'green');
    formatter.format(data, 11); // Apply formatter to second column

    drawTable();
    function drawTable() {
      table.draw(data, { allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;", 'cssClassNames': cssClassNames });
    }
  });
}