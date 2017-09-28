$().ready(function() {

	$("button").click(function () {
		
		$.getJSON(
			"http://localhost:56267/Students/List",
			function (students){
				studentList = students;
				console.log(students);
				buildTableOfStudents(students);
			}
		);

	});

});

function buildTableOfStudents(students){
	//make sure to empty the table, otherwise you get duplicate information
	$("tbody").empty();
	//as always, if we are looping through the length of an array, we'll create a variable
	//that is the singular version of the array's name
	for(var student of students){
		var row = "<tr>";
		row += "<td>" + student.FirstName +  " " + student.LastName + "</td>";
		if (student.Major != null){
			row += "<td>" + student.Major.Description + "</td>";
		}else{
			row += "<td>Undeclared</td>";
		}
		row += "<td>" + student.Sat + "</td>";
		row += "<td>" + student.Gpa + "</td>";
		row += "</tr>";

		$("tbody").append(row);
	}
}