// festival cashBox.js
(function($){
var card = $('.card_area');
var cardDl = card.children('dl');

var ticket = $('.ticket_area').children('div');
var ticketBtn = ticket.children('a');

// .card_aread의 높이를 바디값으로 주는것 그럼 윈도우 화면에 꽉찬다.
var bodyH = $('body').height();
card.css({height:bodyH, minHeight:700});

console.log(ticketBtn.eq(0));
console.log(ticketBtn.eq(1));
console.log(ticketBtn.eq(2));


 ticketBtn.on('click',['a'],function(e){
   e.preventDefault();
   var index = $(this).index();
   console.log(index);
   $(this).addClass('active');
   $(this).siblings().removeClass('active');
   cardDl.eq(index).addClass('view');
   cardDl.eq(index).siblings('dl').removeClass('view');
 })



})(this.jQuery);