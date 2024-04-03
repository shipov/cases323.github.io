
var myFullpage = new fullpage('#fullpage', {

      sectionsColor: ['#f4f7fb', '#f4f7fb', '#7BAABE'],
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#menu',
      
      keyboardScrolling: true,
      navigation: true,
      'navigationPosition': 'left',
      scrollingSpeed: 1000,
      parallax: true,
        scrollBar: true,
        dragAndMove: 'horizontal',
        parallaxOptions: {
            type: 'reveal',
        

            percentage: 100,
            property: 'translate'
        },
        
      

      
    onLeave: function(origin, destination, direction){
        var leavingSection = this;

        //после покидания раздела 2
        if(origin.index == 1 && direction =='down'){
            setTimeout(function() {
        $('.share').addClass('active');
            $('.vicon').addClass('active');
            $('#fp-nav ul li a span, .btn').addClass('white');
    }, 500);
            
        }

        else if(direction == 'up'){
            $('.share').removeClass('active');
            $('.vicon').removeClass('active');
            $('#fp-nav ul li a span, .btn').removeClass('white');
        }
    }


    });

$(document).on('click', '#moveDown', function(){
  fullpage_api.moveSectionDown();
});

   
    $(".btn").click(function () {
      $(this).toggleClass("open");
  });

    $(".btn, #menu li").click(function () {
        $(".overlay").toggleClass("open");
    });
    $("#menu li").click(function () {
        $(".btn").removeClass("open");
    });

    
$(".case-item").click(function(){
	$(".case-item").toggleClass("open");
	$(this).toggleClass("open");
  $("img.bayk, .case-item.item-1 a.down, .case-item.item-1 a.UP1, .case-item.item-1 a.arrow").toggleClass("play");
  $(".title, .enter-pic").toggleClass("delete");
});


$(".case-item").click(function(){
	$(".case-item.item-2").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-2.bayk, .case-item.item-2 a.down, .case-item.item-2 a.UP1, .case-item.item-2 a.arrow").toggleClass("play");
  $(".case-item.item-2.title, .case-item.item-2.enter-pic").toggleClass("delete");
});


$(".case-item").click(function(){
	$(".case-item.item-3").toggleClass("open");
	$(this).toggleClass("open");
  $(".maks, .case-item.item-3 a.down, .case-item.item-3 a.UP1, .case-item.item-3 a.arrow_w").toggleClass("play");
  $(".case-item.item-3.title, .case-item.item-3.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-4").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-4.bayk, .case-item.item-4 a.down, .case-item.item-4 a.UP1, .case-item.item-4 a.arrow").toggleClass("play");
  $(".case-item.item-4.title, .case-item.item-4.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-5").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-5.bayk, .case-item.item-5 a.down, .case-item.item-5 a.UP1, .case-item.item-5 a.arrow_w, .case-item.item-5 .nda").toggleClass("play");
  $(".case-item.item-5.title, .case-item.item-5.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-6").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-6.bayk, .case-item.item-6 a.down, .case-item.item-6 a.UP1, .case-item.item-6 a.arrow_w, .case-item.item-6 .nda").toggleClass("play");
  $(".case-item.item-6.title, .case-item.item-6.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-7").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-7.bayk, .case-item.item-7 a.down, .case-item.item-7 a.UP1, .case-item.item-7 a.arrow_w, .case-item.item-7 .nda").toggleClass("play");
  $(".case-item.item-7.title, .case-item.item-7.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-8").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-8.bayk, .case-item.item-8 a.down, .case-item.item-8 a.UP1, .case-item.item-8 a.arrow_w").toggleClass("play");
  $(".case-item.item-8.title, .case-item.item-8.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-9").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-9.bayk, .case-item.item-9 a.down, .case-item.item-9 a.UP1, .case-item.item-9 a.arrow_w").toggleClass("play");
  $(".case-item.item-9.title, .case-item.item-9.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-10").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-10.bayk, .case-item.item-10 a.down, .case-item.item-10 a.UP1, .case-item.item-10 a.arrow_w").toggleClass("play");
  $(".case-item.item-10.title, .case-item.item-10.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-11").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-11.bayk, .case-item.item-11 a.down, .case-item.item-11 a.UP1, .case-item.item-11 a.arrow_w").toggleClass("play");
  $(".case-item.item-11.title, .case-item.item-11.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-12").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-12.bayk, .case-item.item-12 a.down, .case-item.item-12 a.UP1, .case-item.item-12 a.arrow_w").toggleClass("play");
  $(".case-item.item-12.title, .case-item.item-12.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-13").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-13.bayk, .case-item.item-13 a.down, .case-item.item-13 a.UP1, .case-item.item-13 a.arrow").toggleClass("play");
  $(".case-item.item-13.title, .case-item.item-13.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
	$(".case-item.item-14").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-14.bayk, .case-item.item-14 a.down, .case-item.item-14 a.UP1, .case-item.item-14 a.arrow_w").toggleClass("play");
  $(".case-item.item-14.title, .case-item.item-14.enter-pic").toggleClass("delete");
});

// document.getElementsByClassName('').addEventListener('click', function() {
//   this.classList.add('open');
// });

document.getElementsByClassName('.open').addEventListener('click', function() {
  this.classList.remove('open');
});

var $cont = document.querySelector(".cont");
var $elsArr = [].slice.call(document.querySelectorAll(".el"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".el__close-btn"));

setTimeout(function () {
  $cont.classList.remove("s--inactive");
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener("click", function () {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("s--el-active");
    this.classList.add("s--active");
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $cont.classList.remove("s--el-active");
    document.querySelector(".el.s--active").classList.remove("s--active");
  });
});

