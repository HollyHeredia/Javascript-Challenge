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
 
// define variable for the filter box
var submit = d3.select("#filter-btn");

// define variable for the table/data
var table = d3.select("tbody")

// function for click
submit.on("click", function() {
    table.html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //log to check that it's working
    console.log(inputValue);
    console.log(tableData);