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
	
	
	
	$('.input_item>input').on('focus', function(){
		if ($(this).val() == 'Ваш E-mail' || $(this).val() == 'Количество' || $(this).val() == 'Ваше имя' || $(this).val() == 'Телефон') {
			$(this).val('');
		}
	});
	$('.input_item>input').on('blur', function(){
		
		if ($(this).val() == '') {
			if($(this).attr('val') == '2'){
				$(this).val('Ваше имя');
			}
			if($(this).attr('val') == '3'){
				$(this).val('Телефон');
			}
			if($(this).attr('val') == '4'){
				$(this).val('Ваш E-mail');
			}
			if($(this).attr('val') == '0'){
				$(this).val('Количество');
			}
		}
	});

	$('.scroll_btn').click(function(){
		    $('html, body').animate({
		        scrollTop: $("#to_scroll").offset().top - 50
		    }, 1000);
	});

	$('.form_btn').click(function(){
		var pic = $(this).siblings('.left_part_img_cont').clone();
		var desc = $(this).siblings('.right_part_text_cont').children('.item_text').clone();
		var price = $(this).siblings('.right_part_text_cont').children('.price').clone();
		$('.picture_of_prod>div').replaceWith(pic);
		$('.desc_of_prod>div').replaceWith(desc);
		$('.price_of_prod>div').replaceWith(price);

		var title = $(this).siblings('.right_part_text_cont').children('.item_title').text();
		//console.log(title);
		$('.desc_of_prod>.item_text>.item_desc_title').text(title);



		$('#dis>input').val(title);
		//console.log($('#dis'));


		$('.picture_of_prod').height($('#_1>.upper_form').height());


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


