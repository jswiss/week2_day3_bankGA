//if checking is negative, pull from savings
var gaBank = gaBank || {};  
//need to parseInt() input boxes
    
gaBank.initialize = function(event){
  $('button#deposit1').on('click', function(event){
    debugger;
    $('.bal1').html(parseInt(+$('#amount1').val()) + parseInt(+$('.bal1').val()));
  });
  $('button#deposit2').on('click', function(){
    $('.bal2').html(parseInt(+$('#amount2').val()) + parseInt(+$('.bal2').val()));
  });
  $('button#withdraw1').on('click', function(){
    $('.bal1').html(parseInt(+$('#amount2').val()) - parseInt(+$('.bal1').val()));
  //add the overdraft here
  });                         
  gaBank.withdraw2 =function() {
  $('button#withdraw2').on('click', function(){
    $('.bal2').html(parseInt(+$('.bal2').val()) - parseInt(+$('#amount2').val()));
  });
};
};

//changes background and text color if either account reach zero
gaBank.changeColor = function(event){
  $('#balance1').text() === "$0" ? $('#balance1').css({'background-color': 'red', 'color': 'white'}) : $('balance1').css({'background-color': '#E3E3E3', 'color': 'black'});
  $('#balance2').text() === "$0" ? $('#balance2').css({'background-color': 'red', 'color': 'white'}) : $('#balance2').css({'background-color': '#E3E3E3', 'color': 'black'});
};
changeColor();
gaBank.initialize();


$(document).ready(function(){
  });