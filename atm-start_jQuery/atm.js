gabank = {};

//need to parseInt() input boxes
gaBank.IntegerToString = function(event) {
  var amount1Int = parseInt($('#amount1').val());
  var amount2Int = parseInt($('#balance1').val());
  var balance1Int = parseInt($('#amount2').val());
  var balance2Int = parseInt($('#balance2').val());
};



//need to parseInt() value in balance boxes
//need to add/subtract them on click
//if checking is negative, pull from savings
//where to store the values?


//changes background and text color if either account reach zero
  var changeColor = function(event){
    $('#balance1').text() === "$0" ? $('#balance1').css({'background-color': 'red', 'color': 'white'}) : $('balance1').css({'background-color': '#E3E3E3', 'color': 'black'});
    $('#balance2').text() === "$0" ? $('#balance2').css({'background-color': 'red', 'color': 'white'}) : $('#balance2').css({'background-color': '#E3E3E3', 'color': 'black'});
  };

  gaBank.deposit1 =function() {
    $('button#deposit1').on('click', function(){
    $('balance1').html(amount1Int + balance1Int);
    });
  };
  gaBank.deposit1 =function() {
    $('button#deposit2').on('click', function(){
    $('balance2').html(amount2Int + balance2Int);
    });
  };
  gaBank.withdraw1 =function() {
    $('button#withdraw1').on('click', function(){
    $('balance1').html(balance1Int - amount1Int);
    //add the overdraft here
    });
  };
  gaBank.withdraw2 =function() {
      $('button#withdraw2').on('click', function(){
      $('balance2').html(balance2Int - amount2Int);
      });
    };

  changeColor();
};

//wait for page to load
$(document).ready(function(){
  gaBank.initialize();
});
//add money, money increases by that amount
//withdraw money, that much comes out
//can overdraw one account if money is in other
//if you get an error, use google, console.log