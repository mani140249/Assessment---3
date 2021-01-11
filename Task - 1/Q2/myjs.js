var cnt = 1;

var htmlString = "<td><input class='text' type='text'></td>";
htmlString += "<td class='action'><button class='icon plus'>+</button> <button class='icon minus'>-</button></td>";
htmlString += "</tr>";

$(document).on('click','.plus', function(){
	var inputBox = $(this).closest('td').siblings().find('input');

	if(inputBox[0].value == ""){
		inputBox.css('border-color','red');
	}

	else{
		inputBox.css('border-color','#ccc');
		var finalString = "<tr><td>"+ ++cnt + "</td>" + htmlString;
		$('#myTable').append(finalString);
	}
	

});

$(document).on('click','.minus', function(){
	var confirmWindow = confirm("Are you sure to remove this record");
	if (confirmWindow == true) {
		$(this).parents('tr').remove();
	}
	
});

