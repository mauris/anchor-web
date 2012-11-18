
(function($){
    $(function(){
        var animation = 1;
        $('#pnlButtonDownloads a').click(function(){
            $("#imgScreenshot").css('animation', 'ScreenshotJump' + animation + ' 0.4s');
            animation = (animation == 1 ? 2 : 1);
        });
        
        $("#interfaceInfo li").hover(function(){
            var index = $(this).index() + 1;
            $("#interfaceLabels .label").stop().fadeTo('fast', 0.2);
            $("#interfaceLabels .label:nth-child(" + index + ")").stop().fadeTo('fast', 1.0);
        }, function(){
            $("#interfaceLabels .label").stop().fadeTo('fast', 1.0);
        });
        
        var currentSlide = 1;
        $('.slideNavigate').click(function(){
            var $this = $(this);
            var slide = $this.attr('data-slide') || 1;
            if(slide == "next"){
                ++currentSlide;
                if(currentSlide > $('section.slide').length){
                    currentSlide = $('section.slide').length - 1;
                }
                slide = currentSlide;
            }else if(slide == "previous"){
                --currentSlide;
                if(currentSlide < 1){
                    currentSlide = 1;
                }
                slide = currentSlide;
            }else{
                currentSlide = slide;
            }
            $('section.slide').filter(function(){
                return $(this).css('display') == 'block';
            }).fadeOut('fast', function(){
                $('section.slide:nth-child(' + slide + ')').fadeIn('fast');
            });
            return false;
        });
    });
})(jQuery);