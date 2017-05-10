$('.nav a').on('click',function(e){
	e.preventDefault();
	var url = this.href;
	
	$('.nav li.active').removeClass('active');
	$(this).addClass('active');
	
	$('#content').remove(); 
	$('#container').load(url + ' #contentLoad').hide().fadeIn('slow');
});