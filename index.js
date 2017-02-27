// Run in the console at your favourite website to enhance your experience extremely.
(function ($) {
    if (!$) {
        console.error('Extreme Website Experience Enhancer failed to launch: jQuery required and not found.');
        return;
    }
    var divs = $('div, body, html');
    var rollers = $('img,video,p,h1,h2,h3,h4,h5');
    setInterval(function () {
        rollers.each(function () {
            var angle = Math.random() * 720 - 360;
            $(this).css({
                'transform': 'rotate(' + angle + 'deg)',
                'transition-duration': '0.5s'
            });
        });
    }, 250 + Math.round(Math.random() * 500));

    setInterval(function () {
        divs.each(function () {
            var r = Math.round(Math.random() * 255);
            var g = Math.round(Math.random() * 255);
            var b = Math.round(Math.random() * 255);
            $(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
        });
        $('img').each(function () {
            $(this).css('filter', 'hue-rotate(' + Math.round(Math.random() * 360) + 'deg)');
        });
    }, 100);
})($ || jQuery);