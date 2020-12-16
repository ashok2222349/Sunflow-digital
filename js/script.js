$('.toggle').click(function(){
    $('.menu').slideToggle('fast',fuction(){
        if($(this).is(':visible'))
        $(this).css('display','flex');
    });
});