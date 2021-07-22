// from data.js
var tableData = data;

// add data to table
var tbody = d3.select("tbody");


data.forEach(tableData => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

