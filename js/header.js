/**
 * Created by macbook on 16/3/15.
 */
if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        var phoneScale = parseInt(window.screen.width)/836;
        document.write('<meta name="viewport" content="width=836, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
    }else{
        document.write('<meta name="viewport" content="width=836, target-densitydpi=device-dpi">');
    }
}else{
    document.write('<meta name="viewport" content="width=836, user-scalable=no, target-densitydpi=device-dpi">');
}