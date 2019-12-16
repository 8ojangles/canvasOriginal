$(document).ready(function(){


// Footer button open/close

//set footer closed and button off on doc load, 
	$('.footer-outer').addClass('footClosed');
	$('.footerBtn').addClass('footerBtnOff');

// Click event toggle footer open or closed
	$('.footerBtn a').click(function(){
		$(this).parent().toggleClass('footerBtnOff footerBtnOn');
		$('.footer-outer').toggleClass('footOpen footClosed');
//change text in button
		var ct = $(this).text();
        if (ct == "More") {
                // do something
                $(this).text("Less");
        } else {
                // do something
                $(this).text("More");
        };
// Stop page refresh
		return false
		preventDefault();
	}); // end Footer button open/close




// Ajax test

$.ajaxSetup ({
		cache: false
	});
	var ajax_load = "<img class='loading' src='images/load.gif' alt='loading...' />";
	
//	load() functions
	var loadUrl = "includes/footer.php";
	var loadUrl1 = "includes/gallery1.php";
	var loadUrl2 = "includes/gallery2.php";
	var loadUrl3 = "includes/gallery3.php";
	var loadUrl4 = "includes/gallery4.php";
	var loadUrl5 = "includes/gallery5.php";
	var loadUrl6 = "includes/gallery6.php";
	

	$imgWrapper = $('#result img').wrap('<div></div>');


	$(".gallery-slide-btn a").click(function(){
		$("#result").html(ajax_load).load(loadUrl);
		$("#result").hide().fadeIn(1000);
		return false
		preventDefault();
	});





	$(".galleryBtns a").click(function(){
		
		var gallNo = $(this).attr('id');
		var loadUrl = "includes/gallery" + gallNo + ".php";

		$(this).addClass('liveLink').siblings().removeClass('liveLink');
		$("#result").html(ajax_load).load(loadUrl, function(){

			$("#result img").wrap('<div class="imgSelect"></div>');
			$("#result div").wrapAll('<div class="imgThumbBox dimOff"></div>');
			$("#result").prepend('<div class="thumbDimSwitch off">Hide</div>');

			$firstImage = $('#result div:first-of-type img').attr('src');
			$('.galleryOutput .front').css('background-image','url('+ $firstImage +')');

			$('.imgSelect img').click(function(){

				$currentImage = $('div.front').css('background-image').replace(/^url|[\(\)]/g, '');
			 	$('div.back').css('background-image','url('+ $currentImage +')').show().fadeOut(500);
				$newImage = $(this).attr("src");
				$('div.front').css('background-image','url('+ $newImage +')').hide().fadeIn(500);

			}); // end image select click function

			$('.thumbDimSwitch').click(function(){
				$(this).toggleClass('on off');
				$('.imgThumbBox').toggleClass('dimOn dimOff');

				if ($('.imgThumbBox').hasClass('dimOff')) {
				}

				else if ($('.imgThumbBox').hasClass('dimOn')) {
				};

				$wordSwap = (function(){
					if ($('.thumbDimSwitch').hasClass('off') ) {
						$('.thumbDimSwitch').html('Hide')
					}

				else if ($('.thumbDimSwitch').hasClass('on') ) {
						$('.thumbDimSwitch').html('Show')
					};
				});
				$wordSwap();

			});// end image thumnail dimmer click function

		$("#result").hide().fadeIn(500);

		}); // end ajax load function
		
		return false
		preventDefault();
	}); // end Gallery selection click function

	$gallLoadInit = (function(){
		
		var gallNo = '1';
		var loadUrl = "includes/gallery" + gallNo + ".php";

		$(this).addClass('liveLink').siblings().removeClass('liveLink');
		$("#result").html(ajax_load).load(loadUrl, function(){

			$("#result img").wrap('<div class="imgSelect"></div>');
			$("#result div").wrapAll('<div class="imgThumbBox dimOff"></div>');
			$("#result").prepend('<div class="thumbDimSwitch off">Hide</div>');

			$firstImage = $('#result div:first-of-type img').attr('src');
			$('.galleryOutput .front').css('background-image','url('+ $firstImage +')');

			$('.imgSelect img').click(function(){

				$currentImage = $('div.front').css('background-image').replace(/^url|[\(\)]/g, '');
			 	$('div.back').css('background-image','url('+ $currentImage +')').show().fadeOut(500);
				$newImage = $(this).attr("src");
				$('div.front').css('background-image','url('+ $newImage +')').hide().fadeIn(500);

			}); // end image select click function

			$('.thumbDimSwitch').click(function(){
				$(this).toggleClass('on off');
				$('.imgThumbBox').toggleClass('dimOn dimOff');
				
				if ($('.imgThumbBox').hasClass('dimOff')) {
				}

				else if ($('.imgThumbBox').hasClass('dimOn')) {
				};

				$wordSwap = (function(){
					if ($('.thumbDimSwitch').hasClass('off') ) {
						$('.thumbDimSwitch').html('Hide')
					}

				else if ($('.thumbDimSwitch').hasClass('on') ) {
						$('.thumbDimSwitch').html('Show')
					};
				});
				$wordSwap();

			});// end image thumnail dimmer click function

		$("#result").hide().fadeIn(500);

		}); // end ajax load function
		
		return false
		preventDefault();
	}); // end Gallery selection click function
	
	$gallLoadInit();




	$(function(){
  		$("#filesList").bind('change', function(){
   		 $(".selectOutput").empty();
    	var ourFile = 'includes/' + $(this).val();
    	$('.selectOutput').load(ourFile);
  		});
	});


});