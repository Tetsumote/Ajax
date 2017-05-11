$('.nav a').on('click',function(e){
	e.preventDefault();
	var url = this.href;
	
	$('.nav li.active').removeClass('active');
	$(this).addClass('active');
	
	$('#content').remove(); 
	$('#container').load(url + ' #contentLoad').hide().fadeIn('slow');
});
/*
Hash solution to labolatory
	$(window).hashchange(function() {
    var hash = location.hash;
    var array_url = hash.split('#');
    var page = $(array_url).last()[0];
});

  	var url = $(this).attr('href');
    var array_url = url.split('#');
    var page = $(array_url).last()[0];
	
	var hash = location.hash;
    location.hash = u




*/