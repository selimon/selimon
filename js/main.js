$(function () {
	$('.fa-bars').click(function(){
		$('.mobile_nav').addClass('active');
	});

	$('.fa-times').click(function(){
		$('.mobile_nav').removeClass('active');
	});

	$('#faq1_caret').click(function(){
		$('#faq1_caret').toggleClass('rotate');
		$('#faq1_btn').toggleClass('border-none');
	});

	$('#faq2_caret').click(function(){
		$('#faq2_caret').toggleClass('rotate');
		$('#faq2_btn').toggleClass('border-none');
	});

	$('#faq3_caret').click(function(){
		$('#faq3_caret').toggleClass('rotate');
		$('#faq3_btn').toggleClass('border-none');
	});

	$('#faq4_caret').click(function(){
		$('#faq4_caret').toggleClass('rotate');
		$('#faq4_btn').toggleClass('border-none');
	});

	$('#faq5_caret').click(function(){
		$('#faq5_caret').toggleClass('rotate');
		$('#faq5_btn').toggleClass('border-none');
	});
});

function slowScroll(id){ // id элемента, нажав на который будет работать анимация
	var offset = 50;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}