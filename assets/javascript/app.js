$( document ).ready(function() {

//set scoreboard initial values
  var ansCorrect = 0;
  var ansWrong = 0;
  var isRunning = false;
  var timeDisplay = $("<p></p>"); //creates p element
  var counter = 30;



  $("#scoreCard").hide();   //hide scorecard
  $("#test").hide();       //hide test

//when you click on the start button:

  $("#start").click( function(){ 
  $("#test").slideDown();  //show test

      setInterval(function() {
      counter--;   
        $('#topDiv').append(timeDisplay);  //shows where to put it
        $("p").html("Time Remaining:" + counter); //define what goes in p tag 
        $("p").addClass("countDown");
           //console.log(counter);
            if (counter === 0) {
              checkAnswer();
              $("#test").hide(); //hide the test element
              $("#scoreCard").show(); //show scoreCard element
              clearInterval(counter);
            };         
      }, 1000); 
     
  });

//defining all the correct answers

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

     //check each values item against the value of checked item

        var checkAnswer = function(){
          $.each(values, function(name, value) {
              if($('input:radio[name="' + name + '"]:checked').val() === value){  //if value of the checked radio btn is equal to and item in the 'values' object
                  ansCorrect++;
              }else{
                  ansWrong++;                  
              }
                $("p").hide(); //hide time display
                $('#scoreCard').html("Answers Correct:" + ansCorrect);  //render scorecard answers correct
                $('#scoreCard').append(" Answers Wrong:" + ansWrong);   //append scorecard answers wrong to #scorecard div
          });
        }
});




    













