/**
 * Created by liangchengwei on 2018/1/3.
 */


require.config(
    {
        paths: {
            'jquery': '../js/jquery-3.2.1',
            'js1':'../impjs/1',
            'js2':'../impjs/2',
            'js3':'../impjs/3'
        }
    }
);
require(['jquery','js1','js2','js3'],function ($) {
    $(document).on('click','#contentBtn',function(){
        $('#messagebox').html('You have access Jquery by using require()');
        alert(Object.prototype.toString);
        alert(Object.prototype.toString.call("fff"));
        alert(Object.prototype.toString.call(func1));
        loopProt();
    });
});

function loopProt() {
    var o = Object.getOwnPropertyNames(Object.prototype);
    for(var i in o) {
        var type = eval("typeof Object.prototype." + o[i]);
        console.log(o[i] + ":" + type);


    }
}