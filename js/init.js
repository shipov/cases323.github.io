
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
	$(".case-item").addClass("open");
	$(this).toggleClass("open");
  $("img.bayk, .case-item.item-1 a.down, .case-item.item-1 a.UP1, .case-item.item-1 a.arrow").toggleClass("play");
  $(".title, .enter-pic").toggleClass("delete");

});


$(".case-item").click(function(){
	$(".case-item.item-2").addClass("open");
	$(this).toggleClass("open");
  $(".case-item.item-2.bayk, .case-item.item-2 a.down, .case-item.item-2 a.UP1, .case-item.item-2 a.arrow").toggleClass("play");
  $(".case-item.item-2.title, .case-item.item-2.enter-pic").toggleClass("delete");

});






document.getElementsByClassName('').addEventListener('click', function() {
  this.classList.add('open');
});

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

