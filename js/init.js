var myFullpage = new fullpage('#fullpage', {

  sectionsColor: ['#f4f7fb', '#f4f7fb', '#7BAABE'],
  anchors: ['firstPage', 'secondPage', 'thirdPage'],
  menu: '#menu',

  keyboardScrolling: true,
  navigation: true,
  navigationPosition: 'left',
  scrollingSpeed: 300,
  parallax: true,
  scrollBar: true,
  dragAndMove: 'horizontal',
  parallaxOptions: {
      type: 'reveal',
      percentage: 500,
      property: 'translate'
  },




  onLeave: function(origin, destination, direction){
    var leavingSection = this;

        //после покидания раздела 2
    if(origin.index == 1 && direction =='down'){
        setTimeout(function() {
            $('.share').addClass('active');
            $('.buttons, .vicon').addClass('active');
            $('.contact, #fp-nav ul li a.active span, #fp-nav ul li a span, .btn, .hole, body, .vicon_txt').addClass('white');
        }, 100);

    }

    else if(direction == 'up'){
        $('.share').removeClass('active');
        $('.buttons, .vicon').removeClass('active');
        $('.contact, #fp-nav ul li a.active span, #fp-nav ul li a span, .btn, .hole, body, .vicon_txt').removeClass('white');
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
	// $(".case-item").toggleClass("open");
	// $(this).toggleClass("open");
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

$(".case-item").click(function(){
	$(".case-item.item-15").toggleClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-15.bayk, .case-item.item-15 a.down, .case-item.item-15 a.UP1, .case-item.item-15 a.arrow_w").toggleClass("play");
  $(".case-item.item-15.title, .case-item.item-15.enter-pic").toggleClass("delete");
});

$(".case-item").click(function(){
    $(".case-item.item-16").toggleClass("open");
    $(this).toggleClass("open");
  $(".case-item.item-16.bayk, .case-item.item-16 a.down, .case-item.item-16 a.UP1, .case-item.item-16 a.arrow_w, .work").toggleClass("play");
  $(".case-item.item-16.title, .case-item.item-16.enter-pic").toggleClass("delete");
});



$("a.buttons:nth-last-child(1)").click(function () {
  $('a.buttons').toggleClass("hovered");
});


$("a.buttons:nth-last-child(1)").click(function () {
  $('.float-action-button_txt').toggleClass("hovered");
});


var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise(ctx) {

    var w = ctx.canvas.width,
    h = ctx.canvas.height,
    idata = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(idata.data.buffer),
    len = buffer32.length,
    i = 0;

    for(; i < len;)
        buffer32[i++] = ((4000 * Math.random())|0) << 30;
    
    ctx.putImageData(idata, 0, 0);
}

var toggle = true;

// added toggle to get 30 FPS instead of 60 FPS
(function loop() {
    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }
    noise(ctx);
    requestAnimationFrame(loop);
})();




var typed = new Typed('.typed', {
  strings: ['ux/ui design','development', 'research'],
  typeSpeed: 50,
  backSpeed: 10,
  startDelay: 1000,
  backDelay: 500,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  shuffle: true,
  smartBackspace: true,
  loop: true
});

setTimeout(function(){
$('body').addClass('selected');
},2500)

setTimeout(function(){
$('.preloader').addClass('selected');
},2500)

setTimeout(function(){
$('.preloader').addClass('none');
},3000)

// window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
//   const preloader = document.querySelector('.preloader') /* находим блок Preloader */
//   preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
// })

// const items = document.querySelectorAll('.case-item')
// items.forEach(item => item.addEventListener("click", event => {
//   event.target.classList.toggle('open')
// }));


// document.getElementsByClassName('.open').addEventListener('click', function() {
//   this.classList.remove('open');
// });

// document.getElementsByClassName('.case-item').addEventListener('click', function() {

	//   $(".open").addClass("open");
	//    $(this).removeClass("open");
	// });
	//   $(".case-item").click(function(){
    //   $(".open").removeClass("open");
    //   $(this).addClass("open");
    // });

