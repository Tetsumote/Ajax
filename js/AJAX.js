$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                     
  var $content = $('#content');                            

  $('nav a.current').removeClass('current');               
  $(this).addClass('current');
  $('#container').remove();                                 

  $.ajax({
    type: "POST",                                           
    url: url,                                               
    timeout: 2000,                                          
    beforeSend: function() {                                
      $content.append('<div id="load">Wczytywanie</div>');  
    },
    complete: function() {                                  
      $('#loading').remove();                               
    },
    success: function(data) {                               
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function() {                                       
      $('#panel').html('<div class="loading">Proszę spróbować wkrótce.</div>');
    }
  });

});
