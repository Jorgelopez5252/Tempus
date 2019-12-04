google.charts.load('current', {'packages':['table']});
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
    data.addColumn('number', 'Week', );
    data.addColumn('number', 'Sun');
    data.addColumn('number', 'Mon');
    data.addColumn('number', 'Tues');
    data.addColumn('number', 'Wed');
    data.addColumn('number', 'Thur');
    data.addColumn('number', 'Fri');
    data.addColumn('number', 'Sat');
    data.addColumn('string', 'Total Hours');
    // data.addColumn('string', '');
    data.addRows(employees);
  // data.setCell(22, 2, 15, "Fifteen", {style: "font-style:bold; font-size: 30px;"});
  
  // data.setColumnProperty(12, "className", "deleteCol has-text-centered");

  // function selectHandler() {
  //   var selection = table.getSelection();
  //   console.log("Test");
  //   if (selection.length === 0) {
  //   console.log("Nothing");
  //     return;
  //   }
    
  //   var cell = event.target; //get selected cell
  //   rows = selection[0].row;
  //   col = cell.cellIndex;

    
  //   console.log(rows);
  //   console.log(data.getFormattedValue(rows, 0));
  
  // }

  


  
  var table = new google.visualization.Table(document.getElementById('tableHours_div'));
  // google.visualization.events.addListener(table, 'select', function() {
    // selectHandler(table);

    
    
    // var formatter = new google.visualization.ColorFormat();
    // formatter.addRange("A", "Z", 'white', 'red');
    // formatter.format(data, 12); // Apply formatter to second column
    
    table.draw(data, {allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;"});
  });

}


