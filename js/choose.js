/**
 * Created by Administrator on 2016/8/3.
 */
var cont=document.getElementById('cont')
var aLi=cont.getElementsByTagName('li')
var aDiv=cont.getElementsByTagName('div')
for(var i=0;i<aLi.length;i++){
    aLi[i].index=i;
    aLi[i].onclick=function(){
        for(var j=0;j<aLi.length;j++){
            aLi[j].className='';
            aDiv[j].className='';

        }
        this.className='bg';
        aDiv[this.index].className='show';
    }
}
