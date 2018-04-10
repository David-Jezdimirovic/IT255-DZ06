$(document).ready(function() {

	
	$.get( "https://jsonplaceholder.typicode.com/users", function( word ) {
		var i = 1;
		word.forEach( function(element, index) {
			var red = ("<tr><td>"+ i +"</td><td>"+element.id +"</td><td>"+ element.name +"</td><td>"+ element.username +"</td><td>"+ element.email +"</td><td>"+ element.address.street +"</td></tr>");
			$("#table1").append(red);
			i++;
		});
	});
	
	
});

