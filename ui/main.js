console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New value';
//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    
    
    marginRight=marginRight+1;
    img.style,marginRight=marginRight+'px';
}
img.onclick=function(){
  var interval=setInterval(moveLeft,50);
   
};