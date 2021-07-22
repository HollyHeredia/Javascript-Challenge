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

    // create variable to filter data
    var filteredData = tableData.filter(bydate => bydate.datetime === inputValue);

    // create function loop to actually filter data
    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");

    // Use d3 to update each cell's values with data.
    Object.entries(filteredReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
        });

    });

});