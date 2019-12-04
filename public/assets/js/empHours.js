google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(employeeHours);

function employeeHours() {

  $.ajax({
    method: "GET",
    url: "/api/userhours"
  }).then(function (employeeData) {
    const employees = employeeData.map(employee => Object.values(employee));
    console.log(employees);

    let data = new google.visualization.DataTable();
    data.addColumn('number', 'userId');
    // data.addColumn('string', 'First Name');
    // data.addColumn('string', 'Last Name', );
    data.addColumn('number', 'Sun');
    data.addColumn('number', 'Mon');
    data.addColumn('number', 'Tues');
    data.addColumn('number', 'Wed');
    data.addColumn('number', 'Thur');
    data.addColumn('number', 'Fri');
    data.addColumn('number', 'Sat');
    data.addColumn('number', 'Total Hours');
    // data.addColumn('string', '');
    data.addRows(employees);
    // data.setCell(22, 2, 15, "Fifteen", {style: "font-style:bold; font-size: 30px;"});

    function selectHandler(table) {
      let selection = table.getSelection();
      if (selection.length === 0)
        return;

      let cell = event.target; //get selected cell
      row = selection[0].row;
      col = cell.cellIndex;
      if (cell.cellIndex >= 3 & cell.cellIndex <= 9) {
        cell.contentEditable = true;
        //   cell.addEventListener('blur', checkSalary);
      }
      table.setSelection([]);
    }

    let table = new google.visualization.Table(document.getElementById('tableHours_div'));
    google.visualization.events.addListener(table, 'select', function () {
      selectHandler(table);
    });

    table.draw(data, { allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;" });
  });
}