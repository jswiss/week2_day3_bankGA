$(document).ready(function(){



//either reach 0, gray is red and text color is white

  var changeColor = function(event){
    console.log(this);
    $('#balance1').text() === "$0" ? $('#balance1').css({'background-color': 'red', 'color': 'white'}) : $('balance1').css({'background-color': '#E3E3E3', 'color': 'black'});
    $('#balance2').text() === "$0" ? $('#balance2').css({'background-color': 'red', 'color': 'white'}) : $('#balance2').css({'background-color': '#E3E3E3', 'color': 'black'});
  };
  changeColor();
});
//add money, money increases by that amount
//withdraw money, that much comes out
//can overdraw one account if money is in other
//if you get an error, use google, console.log