MorphSVGPlugin.convertToPath("#test_one");

TweenMax.set("#test_one", {rotation:-90, transformOrigin:"center center"});

var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.1});
tl.to("#test_one", 1.5, {drawSVG:"0%"});