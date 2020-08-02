$(document).ready(function(){
    var gradeString = ["A","B","C","D","F"];
    var score = [4.0,3.0,2.0,1.0,0.0];
    var creditHours = new Array();
    var grades = new Array();
    $("#reset").click(function(){
	$("#avg_gpa").val("");
	$("#credithour").val(""); 
	$("#grade").val(""); 
    })
    
    $("#add").click(function(){
	var credithour = parseFloat($("#credithour").val()); 
	var gradeValue = $("#grade").val(); 
	var isValid = true;
	
	//validate investment 
	if (isNaN(credithour) || credithour <= 0) {
		alert("Credit Hours must  be a valid number greater than zero.");
		isValid = false;
	} 
	else if(gradeValue == "" || (gradeValue != "A" &&  gradeValue != "B" && gradeValue != "C" &&  gradeValue != "D" && gradeValue != "F") ) {
		alert("Grade must be amonge A, B, C, D, F.");
		isValid = false;
	}
	
	//compute the future values;
	if (isValid){
	    creditHours.push(credithour);
	    grades.push(gradeValue);
	}
    })
    
    $("#calculate").click(function(){
	    var AvgGPA = 0.0
	    var totalHours = 0.0;
	    var value = 0.0;
	    for ( var i = 0; i < creditHours.length; i++ ) {
		var ch = grades[i];
		for ( var j = 0; j < gradeString.length; j++ ) {
		    if ( ch == gradeString[j] ){
			value = score[j];
		    }
		}
		AvgGPA += creditHours[i] * value;
		totalHours += creditHours[i];
	    }
	    AvgGPA /= totalHours;
	    $("#avg_gpa").val(AvgGPA.toFixed(2));
    })
})
