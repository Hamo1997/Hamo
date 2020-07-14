$(document).ready(function () {

  AOS.init({
    duration: 1200,
  });
  AOS.init();


  let step = 1;

  $(".fa-bars").click(function () {
    $(".header_inner_container").toggle(500, 'linear');
  });

  $(".fa-bars").click(function () {
    step++;
    $(".header_inner_container").addClass('position')
    $(".header_main").css("opacity", ".2");

    if (step % 2) {
      $(".header_main").css("opacity", "1")
      $(".header_inner_container").removeClass('position')
    }

  });



  $(".order_btn").click(function () {
    $(".contact_img_div").show("fast");
    $(".contact_div").show("slow");

  })
  $(".div_for_close").click(function () {
    $(".contact_div").hide("slow");
  });




  $('.section_1_item').on('mouseover', function () {

    let current = $(this).data('opener');
    let element = document.querySelectorAll('[data-opener]');
    console.log(current);

    element.forEach((v, i, arr) => {
      v.classList.remove('active');
      if (current == v.getAttribute('data-opener')) {
        v.classList.add('active');
      }

    })

  });


  $(".box_btn").click(function () {
    $(".pad_display").show();
    $(".window_black_two").show();
  });

  $(".window_black_two").click(function() {
    $(".pad_display").hide();
    $(".window_black_two").hide();
    $(".zoom_block").hide();
  });


  $(".clos_btn2").click(function () {
    $(".pad_display").hide();
    $(".zoom_block").hide();
    $(".window_black_two").hide();
  });


  $(".vi-1").click(function () {
    $(".zoom_block_1").toggle(500);
  });

  $(".vi-2").click(function () {
    $(".zoom_block_2").toggle(500);
  });

  $(".vi-3").click(function () {
    $(".zoom_block_3").toggle(500);
  });

  $(".vi-4").click(function () {
    $(".zoom_block_4").toggle(500);
  });

  $(".vi-5").click(function () {
    $(".zoom_block_5").toggle(500);
  });

  $(".vi-6").click(function () {
    $(".zoom_block_6").toggle(500);
  });

  $(".vi-7").click(function () {
    $(".zoom_block_7").toggle(500);
  });

  $(".vi-8").click(function () {
    $(".zoom_block_8").toggle(500);
  });

  $(".vi-9").click(function () {
    $(".zoom_block_9").toggle(500);
  });

  $(".call_me").click(function(){
    $(".contact_number_mobile").show();
    $(".black-window").show();
  })  ;

  $(".black-window").click(function(){
    $(".black-window").hide();
    $(".contact_number_mobile").hide();
  });


});