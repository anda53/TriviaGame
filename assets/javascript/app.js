$( document ).ready(function() {

  var ansCorrect = 0;
  var ansWrong = 0;
  var isRunning = false;
  var timeDisplay = $("<p></p>"); //creates p element
  var counter = 20;



  $("#test").hide();
  $("#start").click( function(){ 
    $("#test").slideDown();

    if(isRunning==false){
     

      setInterval(function() {
        counter--;
        //console.log(counter);

        $('#topDiv').append(timeDisplay);  //shows where to put it
        $("p").html("Time Remaining:" + counter); 
           //console.log(counter);
          if (counter >= 0) {
            //console.log(counter);
            if (counter === 0) {
              alert('sorry, out of time');
            };
            clearInterval(counter);
          } 
      }, 1000); 
    }  

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

    
          $.each(values, function(name, value) {
              if($('input:radio[name="' + name + '"]:checked').val() == value){
                  ansCorrect++;
                  console.log('The answer is correct.....!');
                  $('#topDiv').html("Answers Correct:" + ansCorrect);


              }else{
                  ansWrong++;
                  console.log("the answer is incorrect damn...")
              }
          });
});     
  // //function for if answer is right and adds 1 to score of each
        // $('#submit').onsubmit(function(){

        //   console.log('this isRunning working');
        // })

        
      // $('#submit').click(function(){
      //      if($('input:radio[name="' + name + '"]:checked').val() == value){
      //             ansCorrect++;
      //             console.log(ansCorrect);
      //         }else{
      //             ansWrong++;
      //             console.log("the other answer is incorrect damn...")
      //         }
      // });

    // make a function to check if the person won or not 


      // function wonOrNot(){
      //   // check all the answers
      //   // alert u lose or u win
      // }


      // $("#submit").click( function(){
      //     $('#topDiv').html("Total answers correct:" + ansCorrect);
      //     $('#topDiv').html("Total answers wrong:" + ansWrong);
      // });
 




   



///Problem== function appends for every second in countdown
//write a function that calculates wether ans is right or wrong
//when all questions answered, calculate correct/wrong/unanswered answers
// hide #test div
//show div with correct, wrong, unnswered at end
   











