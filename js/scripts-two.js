( function($) {

  $(document).ready(function() {
// Wine Toggles
    $("#panel-two-wine").click(function() {
      $("#panel-two-front").toggleClass("panel-flip");
      $("#panel-two-back").toggleClass("panel-flip-back");
    });
    $("#panel-three-wine").click(function() {
      $("#panel-three-front").toggleClass("panel-flip");
      $("#panel-three-back").toggleClass("panel-flip-back");
    });
    $("#panel-four-wine").click(function() {
      $("#panel-four-front").toggleClass("panel-flip");
      $("#panel-four-back").toggleClass("panel-flip-back");
    });
    $("#panel-five-wine").click(function() {
      $("#panel-five-front").toggleClass("panel-flip");
      $("#panel-five-back").toggleClass("panel-flip-back");
    });
// Text Toggles
    $("#panel-text-one").click(function() {
      alert("yoyoyo");
    });
    $("#panel-text-two").click(function() {
      alert("yoyoyo");
    });
    $("#panel-text-three").click(function() {
      alert("yoyoyo");
    });
    $("#panel-text-four").click(function() {
      alert("yoyoyo");
    });






  });
  // END (D)R(F)
})(jQuery);
// END JQUERY BODYGUARD
