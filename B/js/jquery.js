/**
 * Created by Rimantas on 2017-05-30.
 */
$(document).ready(function () {
    $('li').hover(function(){
        $(this).find('ul>li').stop().slideToggle(400);
    });

    var variable = false;

    $(window).scroll(function(){
        if (!variable && $(this).scrollTop() > 800) {
            $(".progress-element").each(function() {
                var progressBar = $(".progress-bar");
                progressBar.each(function(indx){
                    $(this).css("width", $(this).attr("aria-valuenow") + "%", "transition: 5s");
                });
            });
            variable = true;
            if($(this).scrollTop() > 1200){
                $('.count').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
    }
    });

});
