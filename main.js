$(function() {
  $('.tweet [type="submit"]').on('click', function(e) {
    e.preventDefault();
    var text_input = $('.text_input').val();
    $('.post').prepend('<div class="row "><div class="col-md-12"><p class= "parrafo">' + text_input + '</p><br><input class="btn-danger delete_button" type="submit" value="Eliminar"/><div><br><a href="#"><i class="fa fa-heart-o likeable red"  aria-hidden="true"></i></a><p class="clickeado" >0</p></div></div></div><br>');
 });

      '<a href=""><i class="fa fa-heart-o likeable red"  aria-hidden="true"></i></a><samp class="clickeado" >0</samp>'

  $("body").on('click', '.delete_button', function(e) {
    e.preventDefault();
    $(this).parent().parent().remove()
  });

  $('.post ').on('click','.likeable',function(e) {
    e.preventDefault();  
    $(this).parent().next().html(function(i, val) { 
      return val*1+1 
    });
    $(this).css({"color":"red"})
  })
})








 // $(".click").on('click', function() {
  //   var count = parseInt($(this).attr("data-like-count"));
  //   count++;
  //   $(this).css('opacity', "0.7");
  //   $(this).next().html(count + " Curtidas");
  //   $(this).off(event);
  //   $(this).attr("data-like-count", count);
  // });

            
              
            
          