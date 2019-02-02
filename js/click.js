$('#scroll').on('click', function(){
     $('#sectionPortfolio').css('display','block');
});
$('#back-top').on('click', function(){
     $('#sectionPortfolio').css('display','none');
});


// scroll
jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 400 ? 'In': 'Out')](200);
    });
});