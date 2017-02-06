//counter code
var button=document.getElementById('counter');
button.onclick=function(){
   //Create a request object
   var request=new XMLHttpRequest();
   //capture the response and store it in a variable
   request.onreadystatechange=function(){
       if (request.readyState ==XMLHttpRequest.DONE){
       //Take some action
       if(request.status==200)
       {
            //capture a list of names and render it as a list
    var counter=request.responseText;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
       }
           
       }
   };
    request.open('GET','http://bishalsarkar.imad.hasura-app.io/counter' ,true);
   request.send(null);
};
   
submit.onclick=function(){
    //Create a request object
   var request=new XMLHttpRequest();
   //capture the response and store it in a variable
   request.onreadystatechange=function(){
       if (request.readyState ===XMLHttpRequest.DONE){
       //Take some action
       if(request.status===200)
       {
            //capture a list of names and render it as a list
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
   var ul=document.getElementById('namelist');
   ul.innerHTML = list;
    
       }
       
       }
       //Not done yet
   };
   //Make the request
   request.open('GET','http://bishalsarkar.imad.hasura-app.io/submit-name?name=' + name,true);
   request.send(null);
  
};