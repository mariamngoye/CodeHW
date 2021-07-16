var Startpg = document.getElementById("firstStart");
var button1 = document.getElementById("aans");
var button2 = document.getElementById("bans");
var button3 = document.getElementById("cans");
var button4 = document.getElementById("dans");
var button5 = document.getElementById("aans2");
var button6 = document.getElementById("bans2");
var button7 = document.getElementById("cans2");
var button8 = document.getElementById("dans2");
var button9 = document.getElementById("aans3");
var button0 = document.getElementById("bans3");
var button01 = document.getElementById("cans3");
var button02= document.getElementById("dans3");
var button03= document.getElementById("aans4");
var button04 = document.getElementById("bans4");
var button05= document.getElementById("cans4");
var button06= document.getElementById("dans4");
var button07= document.getElementById("aans5");
var button08= document.getElementById("bans5");
var button09= document.getElementById("cans5");
var button10= document.getElementById("dans5");
var button11= document.getElementById("aans6");
var button12= document.getElementById("bans6");
var button13 = document.getElementById("cans6");
var button14 = document.getElementById("dans6");
var button15 = document.getElementById("aans7");
var button16= document.getElementById("bans7");
var button17= document.getElementById("cans7");
var button18= document.getElementById("dans7");
var Timer = document.getElementById("timer");
var StartBtn = document.getElementById("startBtn");
var highscoreBtn = document.getElementById("highscoreBtn");
var Input = document.getElementById("initials");
var Score = document.getElementById("score");
var results1El = document.getElementById("result1");
var results2El = document.getElementById("result2");
var results3El = document.getElementById("result3");
var results3El = document.getElementById("result4");
var results3El = document.getElementById("result5");
var results3El = document.getElementById("result6");
var results3El = document.getElementById("result7");




    document.getElementById("cans").addEventListener("click", function() {
        document.getElementById("result1").innerHTML = "Correct";
      });

      document.getElementById("aans2").addEventListener("click", function() {
        document.getElementById("result2").innerHTML = "Correct";
      });

      document.getElementById("bans3").addEventListener("click", function() {
        document.getElementById("result3").innerHTML = "Correct";
      });

      document.getElementById("cans4").addEventListener("click", function() {
        document.getElementById("result4").innerHTML = "Correct";
      });
      document.getElementById("bans5").addEventListener("click", function() {
        document.getElementById("result5").innerHTML = "Correct";
      });
      document.getElementById("aans6").addEventListener("click", function() {
        document.getElementById("result6").innerHTML = "Correct";
      });
      document.getElementById("bans7").addEventListener("click", function() {
        document.getElementById("result7").innerHTML = "Correct";
      });


    
      var timeLeft = 75;
      var Timer = document.getElementById('timer');
      
      var count = setInterval(clockcd, 1000);
      
    function clockcd() {
        if (timeLeft == -1) {
          end(count);
          over();
        } else {
          Timer.innerHTML = timeLeft ;
          timeLeft--;
        }
      }



      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("myQuestions");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slides[slideIndex-1].style.display = "block";  
      }

      
StartBtn.addEventListener("click",start);