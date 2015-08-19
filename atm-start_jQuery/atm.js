// //if checking is negative, pull from savings
// //need to parseInt() input boxes
// $(document).ready(function(){
//   });    
// var gaBank = function(event){
//   $('#deposit1').on('click', function(event){
//     $('.bal1').html(parseInt(+$('#amount1').val()) + parseInt(+$('.bal1').val()));
//   });
//   $('#deposit2').on('click', function(){
//     $('.bal2').html(parseInt(+$('#amount2').val()) + parseInt(+$('.bal2').val()));
//   });
//   $('#withdraw1').on('click', function(){
//     $('.bal1').html(parseInt(+$('#amount2').val()) - parseInt(+$('.bal1').val()));
//   //add the overdraft here
//   });                         
//   $('#withdraw2').on('click', function(){
//     $('.bal2').html(parseInt(+$('.bal2').val()) - parseInt(+$('#amount2').val()));
//   });
// };

// //changes background and text color if either account reach zero
// changeColor = function(event){
//   $('#balance1').text() === "$0" ? $('#balance1').css({'background-color': 'red', 'color': 'white'}) : $('balance1').css({'background-color': '#E3E3E3', 'color': 'black'});
//   $('#balance2').text() === "$0" ? $('#balance2').css({'background-color': 'red', 'color': 'white'}) : $('#balance2').css({'background-color': '#E3E3E3', 'color': 'black'});
// };
// changeColor();
// gaBank();

var buttonEvent = function(){
 $('#deposit1').on('click', function(event){
    $('.bal1').html(parseInt(+$('#amount1').val()) + parseInt(+$('.bal1').val()));
  });
};
buttonEvent();

