var bootstrap =
	'<div class="container"><div class="row"><div class="col-xs-6 col-md-4"><a href="#" class="thumbnail"><img src="images/img1.jpg" id="photo1" alt="..."></a></div><div class="col-xs-6 col-md-4"><a href="#" class="thumbnail"><img src="images/img2.jpg" id="photo2" alt="..."></a></div><div class="col-xs-6 col-md-4"><a href="#" class="thumbnail"><img src="images/img3.jpg" id="photo3" alt="..."></a></div></div></div>';


$('#selector').append(bootstrap);

$('#selector a').on('click',function(e){
	e.preventDefault();
	var queryString = 'vote=' + $(e.target).attr('id');
	$.get('votes.php',queryString, function(data){
		$('#selector').html(data);
	});
});