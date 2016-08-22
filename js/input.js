/**
 * Created by Administrator on 2016/7/21.
 */
/*
* 此处为选项卡*/
var oTab=document.getElementById('tab')
var aLi=oTab.getElementsByTagName('li')
var aInp=oTab.getElementsByTagName('input')

function input(idName){
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick= function () {
            for(var j=0;j<aLi.length;j++){
                aLi[j].className=''
                aInp[j].className=''
            }
            this.className='bg'
            aInp[this.index].className='show'
        }

    }
}
input();

function bindLink() {
    var go=document.getElementById('go')
    go.onclick = function () {
        window.open("go.html");
    }
}
bindLink();



























