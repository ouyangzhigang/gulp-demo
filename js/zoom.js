/**
 * Created by macbook on 16/3/15.
 */
$(function(){
    loading ();
    function loading () {
        var imgs = ["a1.png","a2.png","a3.png","a4.png","a5.png","phone.png","1.png","2.png","3.png","4.png","ass1.png","ass2.png","ass3.png","ass4.png","ass5.png","handPoint.png","loading.png","mail2.png","mail1.png","mail3.png","phone.png","po1.png","po2.png","power.png","sp1.png","sp3.png","sp2.png"];
        var index = 0;
        for (var i = 0; i < imgs.length; i++) {
            var img = new Image();
            img.src = "img/"+imgs[i];
            img.onload = function  () {
                index++;
                var p = parseInt((index / imgs.length*100));
                $("#loading span").html(p);

                if (index>=imgs.length) {

                    $("#loading").hide();

                }
            }
        }
    }

    setTimeout(function(){
        $('.ass').addClass("animated zoomIn").css({'z-index':'9','opacity':'0.9'});
    },55);

});