$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 100) {
        $("#navbar").addClass("nav-bgc");
    }
    if (height <= 200){
        $("#navbar").removeClass("nav-bgc");
    }
});
 $(document).ready(function () {

	
	/*****
	  ** Slick Slider **
	 ****/

	//  $('.carousel-inner1').slick({
	// 	//dots: true,
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 2,
	// 	//fade: true,
	// 	//lazyLoad: 'ondemand',
	// 	centerMode: true,
	// 	// variableWidth: true,
	// 	autoplaySpeed: 2000,
	// 	autoplay: true,
	// 	nextArrow: ".nxt",
	// 	prevArrow: ".prev",
	// 	//asNavFor: '.slider-nav'
	// 	// responsive :[
	// 	// 	{
	// 	// 	breakpoint: 792,
	// 	// 	settings: {
	// 	// 		dots: true,
	// 	// 		infinite: true,
	// 	// 		slidesToShow: 2,
	// 	// 		slidesToScroll: 1,
	// 	// 		autoplaySpeed: 3000,
	// 	// 		autoplay: true,
	// 	// 	}
	// 	// 	}
	// 	// ]
	// });
	// 	$('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.carousel-inner1',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });

	/*****
	  ** WOW Js **
	 ****/
	wow = new WOW(
		{
			boxClass: 'wow',      // default
			animateClass: 'animated', // default
			offset: 0,          // default
			mobile: true,       // default
			live: true        // default
		}
		)
	wow.init();

	/*****
	  ** Typed Js **
	 ****/
var typed = new Typed('.typejs', {
	strings: [
		'Web Designer',
		'Web Developer'
	],
	smartBackspace: true,
	  typeSpeed: 50,
	  backSpeed: 10,
	  loop: true,
	  showCursor: false
});
// 	 var scene = document.getElementById('scene');
// 	 var parallaxInstance = new Parallax(scene, {
//   relativeInput: true
// });
// parallaxInstance.friction(0.2, 0.2);

//  $('#img1').elevateZoom({
// 	 imageCrossfade: true,
// 	 easing : true,
// 	 zoomWindowWidth:400,
// 	zoomWindowHeight:400,
// 	tint:true, 
// 	tintColour:'#fff', 
// 	tintOpacity:0.3
//  });


//    /*
// 	  ** Anime Js **
// 	 ****/

// // 	anime({
// // 		targets: '.css-prop-demo .el',
// // 		translateX: 400,
// // 		// rotate: '2turn',
// // 		duration: 2000,
// // 		left: '300px',
// // 		backgroundColor: '#111',
// // 		borderRadius: ['0%', '50%'],
// // 		easing: 'easeInOutQuad'
// // });

// // anime({
// // 	targets: ".square",
// // 	translateX: anime.stagger(0, {grid:[10, 5], from: 'center', axis:'x'}),	
// // 	translateY: anime.stagger(0, {grid:[10, 5], from: 'center', axis:'y'}),
// // 	rotateZ: anime.stagger([0, 90], {grid:[14, 5], from: 'center', axis:'x'}),
// // 	direction: 'alternate'
// // });




// });
//   $(function() {
//         $('.chart').easyPieChart({
// 			// barColor:"#ef1e25",
// 			// trackColor: "#f2f2f2",
// 			// lineWidth: 3,
// 			// size: 110
//         });
//     });

	//  	$("img").on("contextmenu",function(){
    //    return false;
	});