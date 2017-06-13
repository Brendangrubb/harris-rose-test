( function($) {

  $(document).ready(function() {
    var logo = document.getElementById("harris-logo");
    var sign = document.getElementById("cigales-sign");
    var words = document.getElementById("cigales-words");

    TweenMax.from(logo, 3, {
      rotation: 360,
      opacity: 0,
      scale: 0,
      ease: Sine.easeOut,
    });

    TweenMax.to(logo, 1, {
      opacity: 0.0,
      delay: 3
    });

    TweenMax.from(sign, 1, {
      opacity: 0.0,
      delay: 3
    });

    TweenMax.from(words, 2, {
      opacity: .2,
      x: 1000,
      delay: 4
    });
  });
})(jQuery);




// OLD SCRIPTS-IDENTICAL TO GREENSOCK_TEST

// // Business Logic
//
// function backwardsize(input) { // Reverses Input String
//   var splitInput = input.split("");
//   var reversedInput = splitInput.reverse();
//   var joinedInput = reversedInput.join("");
//
//   return joinedInput;
// };
//
// function testFunction() {
//   alert("Green Sock Rules!");
// }
//
//
// // User Interface Logic
// $(document).ready(function() {
//   // jquery alert test
//   $(".jumbotron").click(function() {
//     alert("test sucka");
//   });
//   // Calls backwardsize Function and Prints Return
//   $("#backwards-name-form").submit(function(event) {
//     var input = $('#input').val();
//     var output = backwardsize(input);
//     $(".output-intro").addClass("visible");
//     $("#output").text(output);
//     event.preventDefault();
//   });
//
//   // Green Sock
//   var logoOne = document.getElementById("logo-id");
//   var logoTwo = document.getElementById("logo-two-id");
//
//   // ANIMATION logos cross left to right, add background-color
//   // TweenMax.to(logoOne, 6, {
//   //   left:600,
//   //   backgroundColor:"#c66a1c",
//   //   border:"5px solid black",
//   //   borderRadius:15});
//   // TweenMax.to(logoTwo, 6, {
//   //   right:600,
//   //   backgroundColor: "#1c78c6",
//   //   border:"5px solid black",
//   //   borderRadius:15}
//
//   // ANIMATION fly away/fly in (.to/.from)
//   // TweenMax.from(logoOne, 3, {x:600, rotation:360, scale:.05})
//   // TweenMax.from(logoTwo, 3, {x:-600, rotation:-360, scale:.05})
//
//   // ANIMATION bounce in
//   TweenMax.from(logoOne, 1.5, {
//     opacity:0,
//     scale:0,
//     ease:Bounce.easeOut
//   });
//   TweenMax.from(logoTwo, 2, {
//     opacity:0,
//     scale:0,
//     ease:Elastic.easeOut,
//     delay:1,
//     onComplete: testFunction
//   });
//
//   // ANIMATION boxes
//   TweenMax.staggerFrom(".box", 1, {
//     opacity:0,
//     y:200,
//     rotation: 360,
//     scale:2,
//     ease: Circ.easeOut,
//     delay:1,
//   },
//   1);
// });
