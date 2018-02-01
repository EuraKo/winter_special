// winter_speccial qABox.js
(function($){
var qABox = $('#qABox');
var qAdl=qABox.children('dl');
var qAdt=qAdl.children('dt');
var qAi=qAdt.children('i');
var qAdd=qAdl.children('dd');

qAdt.on('click',function(e){
  e.preventDefault();
var _this = $(this);
  
   
  // _this.next().slideToggle();

  // var iClass=qAi.attr('class');
  // console.log(iClass);
  // qAi.attr({"class":"fa fa-caret-up"});
  

_this.parent().siblings('dl').children('dd').slideUp();
_this.parent().siblings('dl').find('i').attr({"class":"fa fa-caret-down"});
var ddView = _this.next('dd');
var ddBlock = ddView.css('display') == 'block';
var iconView = _this.find('i');

   if(!ddBlock){
   //   // 보이지 않으면 -> 나타나기!
     ddView.stop().slideDown();
     iconView.attr({'class':'fa fa-caret-up'});
   }else{
   //   //보이면 -> 숨기고
     ddView.stop().slideUp();
     iconView.attr({"class":"fa fa-caret-down"});
   }

});

})(this.jQuery);