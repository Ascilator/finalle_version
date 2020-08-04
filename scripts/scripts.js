jQuery(function () {

	$('.slider_body').bxSlider({
		
		infiniteLoop: true,
		
		nextSelector: $('.next_control'),
		prevText: '',
		nextText: '',
		prevSelector: $('.prev_control'),
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
		auto: true,
		pause: 2000,
	});







	$('.form_btn').click(function(){
		var pic = $(this).parent().siblings('.left_part_img_cont').clone();
		var desc = $(this).siblings('.item_text').clone();
		var price = $(this).siblings('.price').clone();
		$('.picture_of_prod>div').replaceWith(pic);
		$('.desc_of_prod>div').replaceWith(desc);
		$('.price_of_prod>div').replaceWith(price);
	});
	
	function tabs () {

		$(".tab_item").not(":first").hide();
		$(".__tab").click(function() {
			$(".__tab").removeClass("_active").eq($(this).index()).addClass("_active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("_active");
	}
	tabs();

});