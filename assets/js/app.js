$(document).ready(function() {
  //para que desaparezca la primera pantalla
  setTimeout(function() {
    $(".fill").fadeOut(0);
    },5000);
  //para que la pantalla contenido no este durante los primeros 5 segundos
  setTimeout(function() {
    $(".content").fadeOut(0);
  },0);
  //para que la pantalla contenido vuelva luego de los primeros 5 segundos
  setTimeout(function() {
    $(".content").fadeIn(0);
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
  //funcion mouseover para poner ago encima de las imagenes
  $("img").mouseover(function(){
        $("img").css("opacity", "0.5");
    });
    $("img").mouseout(function(){
        $("img").css("opacity", "1");
    });







});
