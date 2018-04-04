///*eslint-env browser*/
//
////STEP 1
//function dispMess() {
//    window.alert("I have been clicked");
//}
//
////STEP 2
//var btn = document.getElementById("btn");
//
//btn.onclick = function myFunction() {
//    window.alert("I have been clicked");
//}


//STEP 3
var btn2 = document.getElementById("btn2");
function functionThree() {
    "use strict";
    window.alert("I have been clicked");
}
btn2.addEventListener("click", functionThree);


//STEP 4
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function() {
    window.alert("I have been clicked");
})



//STEP 5

//STEP 6
var prevent = document.getElementById("redirect");
prevent.addEventListener("click",function(e){
    e.preventDefault();
    window.alert("You have clicked a link to go to google");
})

//STEP 7
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click",function(){
    var text = document.getElementById("text");
    var value = text.value;
    window.alert(value);
})

//STEP 8
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function(){
    window.open('newpage.html','np', 'width=300, height=300, resizble=yes');
});

//STEP 9
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var bool;
var intval
//var onOff = setInterval(0);

function lJSIF(){
    "use strict";
    window.console.log("Learning Javascript is Fun!");
}

btn7.addEventListener("click", function(){
    bool = true;
    if (bool == true){
        intval = setInterval(lJSIF,2000);
    } else {
        clearInterval(intval);
    }


});
btn8.addEventListener("click", function(){
    bool = false;
    if (bool == false){
        clearInterval(intval);
    }

});


//STEP 10
//GLOBAL VARIABLES
var i;          //Incrementer for loop
var h2;         //Store the currently selected h2
var div;        //Store the currently selected div
var h2Elements; //Store the collection of h2 elements
var faqs;       //Store the main tag
var btnElements;
var btn;
var p;

//HELPER FUNCTION GET ELEMENTS FROM THE DOM
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

//MAIN FUNCTION TO TOGGLE VISIBILITY OF ACCORDION
var toggle = function (e) {
    "use strict";
    //Get the currently selected h2 element
    h2 = e.currentTarget;
    //Get the div element for the currently selected element
    div = h2.nextElementSibling;
    //Get all h2 elements in the main tag
    h2Elements = faqs.getElementsByTagName("h2");
    //Loop through the collection of h2 elements
    for (i = 0; i < h2Elements.length; i += 1) {
        //If the h2 element is not the currently selected h2
        if (h2Elements[i] !== e.currentTarget) {
            //Remove the class attribute from the h2
            h2Elements[i].removeAttribute("class");
            //Remove the class attribute from the div
            h2Elements[i].nextElementSibling.removeAttribute("class");
        }
    }


    //If the currently selected h2 has a class attribute
    if (h2.hasAttribute("class")) {
        //Remove it
        h2.removeAttribute("class");
    } else {
        //Otherwise set the class to .minus
        h2.setAttribute("class", "minus");
    }
    //If the currently selected div has a class attribute
    if (div.hasAttribute("class")) {
        //Remove it
        div.removeAttribute("class");
    } else {
        //Otherwise set the class to .open
        div.setAttribute("class", "open");
    }
};

 var message = function(e){
        "use strict";

        btn = e.currentTarget;
        p = btn.nextElementSibling.innerHTML;
//        p =  document.getElementById("btn1").nextElementSibling.innerHTML;
        window.alert(p);
//        window.alert(p.toString());
    }

//HANDLE PAGE LOAD
window.addEventListener("load", function () {
    "use strict";
    //Get the main tag
    faqs = $("faqs");
    //Get all h2 elements in the main tag
    h2Elements = faqs.getElementsByTagName("h2");
    btnElements = faqs.getElementsByTagName("button");
    //Loop through the collection of h2 elements
    for (i = 0; i < h2Elements.length; i += 1) {
        //Add the click event to each h2 element
        h2Elements[i].addEventListener("click", toggle);
    }
    for(i = 0; i<btnElements.length; i = i + 1){
        btnElements[i].addEventListener("click", message);
    }
});
