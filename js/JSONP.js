function showEvents(data){
	console.log(data);
	var newContent = '';
	
	for(var i = 0; i < data.events.length; i++){
		
		console.log(data.events[i].location);
		
		newContent += '<div class="event">';
		newContent += '<p>' + data.events[i].location + '</p>';
		newContent += '<p>' + data.events[i].date + '</p>';
		newContent += '</div>';
		
		console.log(newContent);
	}
	
	document.getElementById('content').innerHTML = newContent;
	
}