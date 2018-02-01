//winter_speccial bannerBox.js

(function($){
var banner=$('.banner_area');
var bannerUl= banner.children('ul'); 

var bannerLast =bannerUl.children('li');

bannerLast.last().prependTo(bannerUl); 
bannerUl.css({marginLeft:'-100%'}); 
banner.css({overflow:'hidden'}); 

var leftBtn=$('.banner_btn').children('button').first();
var rightBtn=$('.banner_btn').children('button').last();

leftBtn.on('click',function(e){
  e.preventDefault();
  bannerUl.stop(false,true).animate({marginLeft:0},function(){
    bannerLast=bannerUl.children('li').last();
    bannerLast.prependTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
  });
});

rightBtn.on('click',function(e){
  e.preventDefault();
  bannerUl.stop(false,true).animate({marginLeft:'-200%'},function(){
    bannerLast=bannerUl.children('li').first();
    bannerLast.appendTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
  });
});

// indicator
var indi=$('.indicator');

// var indiUl=indi.children('ul');
var indiLi=indi.find('li');



indiLi.on('click',function(e){
  e.preventDefault();
  var indiI=$(this).index();
  // console.log(indiI);
  
})

})(this.jQuery);


























