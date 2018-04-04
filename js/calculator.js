/*eslint-env browser*/
var $ = function(id){
    "use strict";
   return document.getElementById(id);
}


function enter(e){
   if($("result").hasAttribute("class")){
       $("result").removeAttribute("class", y);
       $("result").value = "";
   } 
    var x = e.currentTarget.value;
    var y = $("result");
    y.value += x;
    window.console.log(x);
   
}

function calculate(){
    
    var x = $("result").value;
    window.console.log(eval(x));
    $("result").value = "";
    $("result").value = eval(x);
    $("result").setAttribute("class", "y");
    
    
    
    
    
}
function init(){
//    var body = window.document.getElementsByTagName("body");
    var input = window.document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i = i +1){
        if(input[i].id !== "equal"){
            window.console.log(input[i].value);
        input[i].addEventListener("click", enter);
        } else {
            window.console.log("equal");
            input[i].addEventListener("click", calculate);
        }
    }

}
window.addEventListener("load", init);