$(function(){

      $('.menu-hamburguer').on('click', function() {
        $('.nav-celular').slideToggle();
      });
      
    $('.nav-celular').click(function() {
         $(this).hide();
      });
})