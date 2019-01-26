$(function () {
	function slowScroll(id){ // id элемента, нажав на который будет работать анимация
		var offset = 50;
		$('html, body').animate({
			scrollTop: $(id).offset().top - offset
		}, 500);
		return false;
	}
});