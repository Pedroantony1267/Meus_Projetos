$(function(){

    var delay = 300
    var amt
    var curIndex

    initSlider()
    autoPlay()

    function initSlider(){
        amt = $('.sobre-autor').length
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;

        $('.sobre-autor').css('width',sizeBoxSingle+'%');
        $('.scrollWraper').css('width',sizeContainer+'%');
    }

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color: rgb(170, 170, 170);"></span>')
            else
            $('.slider-bullets').append('<span></span>')
        }

        function autoPlay(){
            setInterval(function(){
                curIndex++;
                if(curIndex == amt)
                    curIndex = 0
                goToSlider(curIndex)
            },delay)
        }

        function goToSlider(curIndex){
            var offSetX = $('.sobre-autor').eq(curIndex).offset().left()
            
            $('.scrollEquipe').animate({'scrollLeft':offSetX})
        }
})