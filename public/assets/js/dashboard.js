 // Load the Visualization API and the corechart package.
 google.charts.load('current', { 'packages': ['corechart'] });

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(pieChart);
 google.charts.setOnLoadCallback(donutChart);
 google.charts.setOnLoadCallback(lineChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function pieChart() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['Mushrooms', 3],
     ['Onions', 1],
     ['Olives', 1],
     ['Zucchini', 1],
     ['Pepperoni', 2]
   ]);

   // Set chart options
   var options = {
     'title': 'How Much Pizza I Ate Last Night',
     'width': 600,
     'height': 400
   };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }


 function donutChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      is3D: true,
      'width': 600,
      'height': 400,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }


 function lineChart() {
    var data = google.visualization.arrayToDataTable([
      ['Day', 'Sales', 'Expenses'],
      ['Monday',  1000,      400],
      ['Tuesday',  1170,      460],
      ['Wednesday',  660,       1120],
      ['Thursday',  1030,      540],
      ['Friday',  1500,      1200],
      ['Saturday',  1100,      1400],
      ['Sunday',  900,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }

