$( document ).ready(function() {

  var ansCorrect = 0;
  var ansWrong = 0;
  var isRunning = false;
  var timeDisplay = $("<p></p>"); //creates p element
  var counter = 30;


  $("scoreCard").hide();   //hide scorecard
  $("#test").hide();       //hide test
  $("#start").click( function(){ 
  $("#test").slideDown();  //show test

     
      setInterval(function() {
      counter--;
      //console.log(counter);
        $('#topDiv').append(timeDisplay);  //shows where to put it
        $("p").html("Time Remaining:" + counter); 
           //console.log(counter);
            if (counter === 0) {
              checkAnswer();
              // alert('sorry, out of time');
              $("#test").hide();
              clearInterval(counter);
            };
       
          
      }, 1000); 
     
  });

 var values = {
        q1: '42',
        q2: 'paws',
        q3: 'false',
        q4: 'sit',
        q5: 'smell',
        q6: '9weeks',
        q7: 'corgi',
        q8: 'drWho',
        q9: 'chihuahua',
        q10:'labrador',
        q11: 'chowchow',
        q12: 'sporting',
        q13: 'basenji',
        q14: 'false2',
        q15: 'miniDaschund',

      }
//           //check each values item against the value of checked item
        var checkAnswer = function(){
          $.each(values, function(name, value) {
              if($('input:radio[name="' + name + '"]:checked').val() == value){
                  ansCorrect++;
                  console.log(name);
                  console.log(value);
                

              }else{
                  ansWrong++;
                   
              }
                $("p").hide();
                $('#scoreCard').html("Answers Correct:" + ansCorrect);
                $('#scoreCard').append(" Answers Wrong:" + ansWrong);
          });
        }
});




    



//when all questions answered, calculate correct/wrong/unanswered answers
// hide #test div
//show div with correct, wrong, unnswered at end
   


// Questions-
// 1. counter stopping at 3
 //2.program is computing all 15 questions wrong-why?
// 3. show my score .html
// 4. when counter is 0, .hide #test div and .show score 









