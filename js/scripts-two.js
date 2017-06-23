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
      $("#panel-text-one").toggleClass("panel-text-visibility");
      $("#panel-full-text-one").toggleClass("panel-text-visibility");
    });
    $("#panel-full-text-one").click(function() {
      $("#panel-text-one").toggleClass("panel-text-visibility");
      $("#panel-full-text-one").toggleClass("panel-text-visibility");
    });
    $("#panel-text-two").click(function() {
      $("#panel-text-two").toggleClass("panel-text-visibility");
      $("#panel-full-text-two").toggleClass("panel-text-visibility");
    });
    $("#panel-full-text-two").click(function() {
      $("#panel-text-two").toggleClass("panel-text-visibility");
      $("#panel-full-text-two").toggleClass("panel-text-visibility");
    });
    $("#panel-text-three").click(function() {
      $("#panel-text-three").toggleClass("panel-text-visibility");
      $("#panel-full-text-three").toggleClass("panel-text-visibility");
    });
    $("#panel-full-text-three").click(function() {
      $("#panel-text-three").toggleClass("panel-text-visibility");
      $("#panel-full-text-three").toggleClass("panel-text-visibility");
    });
    $("#panel-text-four").click(function() {
      $("#panel-text-four").toggleClass("panel-text-visibility");
      $("#panel-full-text-four").toggleClass("panel-text-visibility");
    });
    $("#panel-full-text-four").click(function() {
      $("#panel-text-four").toggleClass("panel-text-visibility");
      $("#panel-full-text-four").toggleClass("panel-text-visibility");
    });






  });
  // END (D)R(F)
})(jQuery);
// END JQUERY BODYGUARD
