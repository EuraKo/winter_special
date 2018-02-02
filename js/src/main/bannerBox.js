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
var banImg = $('.ban_img');
console.log(banImg.length);
var indi=$('.indicator');
indi.append('<ul>');
var indiUl = indi.children('ul');

//  for문 indicator li생성------
var i = 0;
var banAttr;

for(;i < banImg.length;i++){
  banAttr = banImg.eq(i).attr('id');
  indiUl.append('<li> <i class="fa fa-circle" aria-hidden="true"> <a href="#'+ banAttr +'"><span class="hidden">banner_'+ i +'</span></a></li>');
};
console.log(banAttr);
// -------------

var indiLi=indi.find('li');

indiLi.on('click',['a'],function(e){
e.preventDefault();
var _thisAttr = $(this).find('a').attr('href');
// console.log('indication Li:' + _thisAttr);
var banI = banImg.index();
console.log(banI);

});


})(this.jQuery);


























