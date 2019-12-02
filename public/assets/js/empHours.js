google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(employeeHours);

function employeeHours() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'ID');
  data.addColumn('string', 'First Name');
  data.addColumn('string', 'Last Name', );
  data.addColumn('number', 'Sunday');
  data.addColumn('number', 'Monday');
  data.addColumn('number', 'Tuesday');
  data.addColumn('number', 'Wednesday');
  data.addColumn('number', 'Thursday');
  data.addColumn('number', 'Friday');
  data.addColumn('number', 'Saturday');
  data.addColumn('number', 'Total Hours');
  data.addColumn('string', '');
  data.addRows([
    [2, 'Mike', 'Trout', 0, 0, 0, 0, 0, 0, 0, 0, '<i class="fas fa-pencil-alt"></i>'],
    [3, 'Jim', 'Carey', 0, 0, 0, 0, 0, 0, 0, 0, '<i class="fas fa-pencil-alt"></i>'],
    [5, 'Alice', 'Wonderland', 0, 0, 0, 0, 0, 0, 0, 0, '<i class="fas fa-pencil-alt"></i>'],
    [7,'Bob', "DaBurger", 0, 0, 0, 0, 0, 0, 0, 0,'<i class="fas fa-pencil-alt"></i>'],
    [9, 'Tim', "Tim",  0, 0, 0, 0, 0, 0, 0, 0, '<i class="fas fa-pencil-alt"></i>'],
    [11, 'Richard', 'Gear', 0, 0, 0, 0, 0, 0, 0, 0,'<i class="fas fa-pencil-alt"></i>'],
    [15, 'Tom', "Ford", 0, 0, 0, 0, 0, 0, 0, 0,'<i class="fas fa-pencil-alt"></i>']
  ]);
  // data.setCell(22, 2, 15, "Fifteen", {style: "font-style:bold; font-size: 30px;"});

  function selectHandler(table) {
    var selection = table.getSelection();
    if (selection.length === 0)
      return;

    var cell = event.target; //get selected cell
    row = selection[0].row;
    col = cell.cellIndex;
    if (cell.cellIndex >= 3 & cell.cellIndex < 10) {
      cell.contentEditable = true;
    //   cell.addEventListener('blur', checkSalary);
    }
    table.setSelection([]);
  }
  
  var table = new google.visualization.Table(document.getElementById('tableHours_div'));
  google.visualization.events.addListener(table, 'select', function() {
    selectHandler(table);
  });

  table.draw(data, {allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;"});
}