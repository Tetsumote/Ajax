$('.nav a').on('click',function(e){
	e.preventDefault();
	var url = this.href;
	
	$('.nav li.active').removeClass('active');
	$(this).addClass('active');
	
	$('#container').remove();
	$('#content').load(url + ' #content').hide().fadeIn('slow');
});