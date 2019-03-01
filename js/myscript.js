


// // display+block+none
// function openContainer() {
// document.getElementById("#options-block").style.display = "block";
// }
// function closeConatainer() {
// document.getElementById("#menu").style.display = "none";
// }


// two-version

$('#block').on('click', function(){
     $('.block-1').addClass('open');
});
$('#block').on('click', function(){
     $('.block-2,.block-3,.block-4').removeClass('open');
});



$('#block-2').on('click', function(){
     $('.block-2').addClass('open');
});
$('#block-2').on('click', function(){
     $('.block-1,.block-3,.block-4').removeClass('open');
});


$('#block-3').on('click', function(){
     $('.block-3').addClass('open');
});
$('#block-3').on('click', function(){
     $('.block-1,.block-2,.block-4').removeClass('open');
});


$('#block-4').on('click', function(){
     $('.block-4').addClass('open');
});
$('#block-4').on('click', function(){
     $('.block-1,.block-2,.block-3').removeClass('open');
});




// // curses-jquery


// $('li').css({color:'red',background:'yellow'})
