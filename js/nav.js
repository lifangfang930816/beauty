/**
 * Created by Administrator on 2016/8/9.
 */
var oNav=document.getElementById('nav')
window.onscroll=function(){
    var po=document.documentElement.scrollTop||document.body.scrollTop;
    if(po>200){
        utils.css(oNav,{
            'position':'fixed',
            'top':0
        })
    }else{
        utils.css(oNav,{
            'position':'static'
        })
    }
}

var oSelf=document.getElementById('self')
function open(html){
     window.open(html,'_self')
}