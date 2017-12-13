$(document).ready(function() {
  //para que desaparezca la primera pantalla
  setTimeout(function() {
    $(".fill").fadeOut(0);
    },5000);
  //para agregar la clase active que utilizare para mostrar el filtro activo
  $('.category-list .categoryItem[category="all"]').addClass('active');
  //funcion para cuando haga click en cada filtro "filtre"
  $('.categoryItem').click(function() {

    var categoryProduct = $(this).attr('category'); //almacenar en la variable la categoria cuando haga click
    //console.log(categoryProduct);
    //poner clase active al filtro al que le hago click
    $('.categoryItem').removeClass('active');
    $(this).addClass('active');
    //cuando haga click ocultar todos los productos
    $('.product-item').hide();
    //y que muestre todos los que correspondan a la categoria
    $('.product-item[category="'+ categoryProduct+'"]').show();
  })
  //funcion para que se muestre todo cuando haga click en el filtro todos los restaurantes
  $('.categoryItem[category="all"]').click(function(){
    $('.product-item').show();

  })







});
