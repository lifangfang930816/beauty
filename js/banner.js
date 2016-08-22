/**
 * Created by Administrator on 2016/7/7.
 */
(function () {
    var oBox = document.getElementById('box');
    var oBoxInner = oBox.getElementsByTagName('div')[0];
    var aDiv = oBoxInner.getElementsByTagName('div');
    var aImg = oBoxInner.getElementsByTagName('img');
    var oUl = oBox.getElementsByTagName('ul')[0]
    var aLi = oBox.getElementsByTagName('li');
    var oBtnLeft = oBox.getElementsByTagName('a')[0];
    var oBtnRight = oBox.getElementsByTagName('a')[1];
    var autoTimer = null;
    var Interval = 2000;
    var step = 0;
    oBoxInner.innerHTML+='<div><img src="image/banner1.jpg" alt=""/></div>';
    oBoxInner.style.width=aDiv.length*aDiv[0].offsetWidth+'px';
    zhufengAnimate(aDiv[0], {opacity: 1}, 1000);

    //4¡£Í¼Æ¬×Ô¶¯ÂÖ²¥

    clearInterval(autoTimer)
    autoTimer = setInterval(autoMove, Interval)
    function autoMove() {
        if (step >= aDiv.length - 1) {
            step = -1
        }
        step++;
        setBanner();
    }

    function setBanner() {
        for (var i = 0; i < aDiv.length; i++) {

            if (i === step) {
                utils.css(aDiv[i], 'zIndex', 1)
                zhufengAnimate(aDiv[i], {opacity: 1}, 1000, function () {
                    var siblings = utils.siblings(this)
                    for (var i = 0; i < siblings.length; i++) {
                        utils.css(siblings[i], 'opacity', 0)
                    }
                })
            } else {
                utils.css(aDiv[i], 'zIndex', 0)
            }
        }
        bannerTip();
    }

    //5.½¹µã×Ô¶¯

    function bannerTip() {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = i === step ? 'bg' : '';
        }
    }

    //6.Êó±êÒÆÈëÒÆ³ý

    oBox.onmouseover = function () {
        clearInterval(autoTimer)
        oBtnLeft.style.display = oBtnRight.style.display = 'block'
    }
    oBox.onmouseout = function () {
        autoTimer = setInterval(autoMove, Interval)
        oBtnLeft.style.display = oBtnRight.style.display = 'none'
    }

    //7.µã»÷½¹µãÇÐ»»

    handleChange();
    function handleChange(){
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                step=this.index;
                setBanner();
            }
        }
    }

    //8.µã»÷×óÓÒÇÐ»»

    oBtnLeft.onclick=function(){

        if(step<=0){
            step=aDiv.length
        }
        step--;
        setBanner();
    }
    oBtnRight.onclick=autoMove;
})()
