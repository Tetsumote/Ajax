$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates(){
	$.getJSON('data/rates.json')
	.done(function(data){
		var d = new Date();
		var hrs = d.getHours();
		var mins = d.getMinutes();
		var msg = '<h2>Kursy wymiany walut</h2>';
		$.each(data,function(key,val){
			msg += '<div class="' + key + '">' + key + ': ' + val +  '</div>';
		});
		msg += '<br>Ostatnia aktualizacja: ' + hrs + ':' + mins + '<br>';
		$('#rates').html(msg);	
		$('#rates').hide().fadeIn('slow');
	}).fail(function(){
		$('#aside h3').remove();
		$('#aside').hide().fadeIn('slow');
		var msgFail = '<h3>Przepraszamy, nie można pobrać danych.</h3>';
		$('#aside').append(msgFail);
	}).always(function(){
		var reload = '<a id="refresh" href="#">';
		reload += '<button type="button" class="btn btn-default btn-md"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></button></a>';
		$('#reload').html(reload);
		$('#refresh').on('click',function(e){
		e.preventDefault();
		loadRates();
		});
	});
}
loadRates();