$().ready(function() {

	$("button").click(function () {
		
		var nbr = $("#theNumber").val();
		$.getJSON(
			"http://localhost:56267/Students/Get/" + nbr,
			function (student){
				studentList = student;
				console.log(student);
				buildTableOfStudents(student);
			}
		);

	});

});

function buildTableOfStudents(student){
	//make sure to empty the table, otherwise you get duplicate information
	$("tbody").empty();
	//as always, if we are looping through the length of an array, we'll create a variable
	//that is the singular version of the array's name
		var row = "";
		row += "<tr><td>First Name:&nbsp&nbsp</td>"
		row += "<td>" + student.FirstName + "</td></tr>";
		
		row += "<tr><td>Last Name:&nbsp&nbsp</td>"
		row += "<td>" + student.LastName + "</td></tr>";

		if (student.Major != null){
			row += "<tr><td>Major:&nbsp&nbsp</td>"
			row += "<td>" + student.Major.Description + "</td></tr>";
		}else{
			row += "<tr><td>Major:&nbsp&nbsp</td>"
			row += "<td>Undeclared</td></tr>";
		}
		row += "<tr><td>SAT:&nbsp&nbsp</td>"
		row += "<td>" + student.Sat + "</td></tr>";

		row += "<tr><td>GPA:&nbsp&nbsp</td>"
		row += "<td>" + student.Gpa + "</td></tr>";

		row += "<tr><td>Address:&nbsp&nbsp</td>"
		row += "<td>" + student.Address + "</td></tr>";

		row += "<tr><td>City:&nbsp&nbsp</td>"
		row += "<td>" + student.City + "</td></tr>";

		row += "<tr><td>State:&nbsp&nbsp</td>"
		row += "<td>" + student.State + "</td></tr>";

		row += "<tr><td>Zipcode:&nbsp&nbsp</td>"
		row += "<td>" + student.Zipcode + "</td></tr>";

		row += "<tr><td>Birthday:&nbsp&nbsp</td>"
		row += "<td>" + student.Birthday + "</td></tr>";

		row += "<tr><td>Phone Number:&nbsp&nbsp</td>"
		row += "<td>" + student.PhoneNumber + "</td></tr>";

		row += "<tr><td>Email:&nbsp&nbsp</td>"
		row += "<td>" + student.Email + "</td></tr>";

		$("tbody").append(row);
}