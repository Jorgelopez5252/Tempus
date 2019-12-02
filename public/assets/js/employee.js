google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(employeeTable);

function employeeTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'ID');
  data.addColumn('string', 'First Name');
  data.addColumn('string', 'Last Name', );
  data.addColumn('string', 'Title');
  data.addColumn('number', 'Sales Today');
  data.addColumn('number', 'Salary');
  data.addColumn('boolean', 'Full Time Employee');
  data.addColumn('string', '');
  data.addRows([
    [2, 'Mike', 'Trout', 'Manager', 150,  10000, true, '<i class="fas fa-pencil-alt"></i>'],
    [3, 'Jim', 'Carey', 'Stocker', {d: 1000,  f: '$1,000'},   {v:8000,   f: '$8,000'},  true, '<i class="fas fa-pencil-alt"></i>'],
    [5, 'Alice', 'Wonderland','Sales Associate', {d: 475,  f: '$475'}, {v: 12500, f: '$12,500'}, true, '<i class="fas fa-pencil-alt"></i>'],
    [7,'Bob', "DaBurger","Cook", {d: 750,  f: '$750'},  {v: 7000,  f: '$7,000'},  true, '<i class="fas fa-pencil-alt"></i>'],
    [9, 'Tim', "Tim", "Stocker", {d: 1000,  f: '$1,000'},   {v:8000,   f: '$8,000'},  false, '<i class="fas fa-pencil-alt"></i>'],
    [11, 'Richard', 'Gear', "Manager", {d: 475,  f: '$475'}, {v: 12500, f: '$12,500'}, true, '<i class="fas fa-pencil-alt"></i>'],
    [15, 'Tom', "Ford", "Sales Associate", {d: 750,  f: '$750'},  {v: 7000,  f: '$7,000'},  false, '<i class="fas fa-pencil-alt"></i>']
  ]);
  // data.setCell(22, 2, 15, "Fifteen", {style: "font-style:bold; font-size: 30px;"});
  
  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {allowHtml: true, width: '100%', height: '150%', style: "font-style:bold; font-size: 30px;"});
}