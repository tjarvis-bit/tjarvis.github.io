//variables for summary
var results = [];
var keepGoing = true;

while(keepGoing) {
    var x = prompt("Enter the first number (x):");
    var y = prompt("Enter the second number (y):");
    var operator = prompt("Enter the operator (+, -, *, /, %):");

    var result;
    var valid = true;

    //check if x and y are not numbers
    if (isNaN(x) || isNaN(y)) {
        result = "Error: x and y must be a number.";
        valid = false;
    }
    //check if operator is valid and perform calculation
    else if (operator === "+") {
        result = Number(x) + Number(y);
    }
    else if (operator === "-") {
        result = Number(x) - Number(y);
    }
    else if (operator === "*") {
        result = Number(x) * Number(y);
    }
    else if (operator === "/") {
        result = Number(x) / Number(y);
    }
    else if (operator === "%") {
        result = Number(x) % Number(y);
    }
    else {
        result = "Error: Invalid operator.";
        valid = false;
    }
    //display table heading
    if (results.length === 0) {
        document.write("<table>");
        document.write("<tr>");
        document.write("<th>Number 1</th>");
        document.write("<th>Number 2</th>");
        document.write("<th>Operator</th>");
        document.write("<th>Result</th>");
        document.write("</tr>");
    }
    //display calculation
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");
    //only save valid results
    if (valid) {
        results.push(result);
    }
    //ask user if they want to continue
    keepGoing = confirm("Click OK to enter another calculation or Cancel to stop.");
}

//close first table
document.write("</table>");

//display summary table
if(results.length > 0) {
    var total = 0;
    var min = results[0];
    var max = results[0];
    for(var i = 0; i < results.length; i++) {
        total += results[i];
        if(results[i] < min) {
            min = results[i];
        }
        if(results[i] > max) {
            max = results[i];
        }
    }
    var average = total / results.length;
    //display summary table
    document.write("<h2>Summary</h2>");
    document.write("<table>");
    document.write("<tr>");
    document.write("<th>Minimum</th>");
    document.write("<th>Maximum</th>");
    document.write("<th>Average</th>");
    document.write("<th>Total</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + average + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
    document.write("</table>");
}
else {
    document.write("<h2>No valid results were entered.</h2>");
}
