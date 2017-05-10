var xhr = new XMLHttpRequest();

xhr.onload = function(){
	
	if(xhr.status === 200){
		
		var response = xhr.responseXML;
		var events = response.getElementsByTagName('event');
		console.log(events[1]);
	
		for(var i = 0; i < events.length; i++){
		//chack response element
		console.log(events[i].firstElementChild.textContent);
		console.log(events[i].lastElementChild.textContent);	
		console.log(events[i].firstElementChild.nextElementSibling.textContent);
			
		//create variables	
		var container, image, location, data;
 		container = document.createElement('div');
 		container.className = 'event'; 
		//sent object to variable	
		var href = events[i].firstElementChild.nextElementSibling.nextElementSibling.textContent;
		//create element	
		image = document.createElement('img');
		image.setAttribute('src', href);
		image.appendChild(document.createTextNode(href));
		container.appendChild(image);
		//sent object to variable	
		var locationContent = events[i].firstElementChild.textContent;
		//create element	
		location = document.createElement('p');
		location.appendChild(document.createTextNode(locationContent));
		container.appendChild(location);
		//sent object to variable		
		var dataContent = events[i].firstElementChild.nextElementSibling.textContent;
		//create element		
		data = document.createElement('p');
		data.appendChild(document.createTextNode(dataContent));
		container.appendChild(data);
		//append element to container	
		document.getElementById('content').appendChild(container);
}
}
};
xhr.open('GET','data/xmlFile.xml',true);
xhr.send(null);