
// JQUERY BODYGUARD
( function($) {

  $(document).ready(function() {

    // PANEL ONE
    var logo = document.getElementById("harris-logo");
    var sign = document.getElementById("cigales-sign");
    var words = document.getElementById("cigales-words");
    var phrase = document.getElementById("title-two");

    // TEST SCRIPT TO SPLIT LETTERS/PUT IN DIVs FOR TEXT ANIMATION
    // var titles = document.getElementById("title-one");
    // var splittitles = titles.innerHTML.split("");
    // for (var i = 0; i < splittitles.length; i++) {
    //   splittitles[i] = splittitles[i] + "</div><div class='letter'>"
    // }
    // var newsplittitles = splittitles.join('');
    // console.log(newsplittitles);

    // STAGGERED LETTER TEXT ANIMATION
    TweenMax.staggerFrom(".letter", 1, {
      opacity:0,
      scale: 2,
      ease: Circ.easeOut,
      delay:3.5,
    },
    .15);
    // TITLE-TWO TEXT ANIMATION
    TweenMax.from(phrase, 2, {
      opacity: 0,
      scale: 2,
      ease: Circ.easeOut,
      delay:7,
    });
    // HARRIS LOGO SPIN ANIMATION
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
    // CIGALES SIGN FADE IN ANIMATION
    TweenMax.from(sign, 1, {
      opacity: 0.0,
      delay: 3
    });
    // CIGALES SIGN WORDS SLIDE IN ANIMATION
    TweenMax.from(words, 2, {
      opacity: .2,
      x: 1000,
      delay: 8
    });
    // END PANEL ONE

    // PANEL TWO

    var scrollMagicController = new ScrollMagic.Controller();


    var testBoxAnimation = TweenMax.to('#test-box', 1, {
      backgroundColor: "#c66a1c",
      scale: .5,
      rotation: 1440
    });

    var panelTwoScene = new ScrollMagic.Scene({triggerElement: '#trigger', offset: 350}).setTween(testBoxAnimation).addIndicators().addTo(scrollMagicController);

    // END PANEL TWO




  });
  // END (D)R(F)
})(jQuery);
// END JQUERY BODYGUARD








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
