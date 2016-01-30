/**
 * Created by Alexander on 30.01.2016.
 */
window.onload = function(){

    var p = document.getElementsByTagName("p");
    var div = document.getElementsByTagName("div");
    var span = document.getElementsByTagName("span");


    var getParagraphs = function(){
        clearSelection(div, span);

        for(var i = 0; i < p.length; i++)
            p[i].style.border = "1px solid red";
    };

    var getDiv = function(){
        clearSelection(p, span);

        for(var i = 0; i < div.length; i++)
            div[i].style.border = "1px solid blue";
    };

    var getSpan = function(){
        clearSelection(div, p);

        for(var i = 0; i < span.length; i++)
            span[i].style.border = "1px solid green";
    };

    var clearSelection = function(){

        for(var i = 0; i < arguments.length; i++){
            var elems = arguments[i];

            for(var e = 0; e < elems.length; e++)
            elems[e].style.border = "none";
        }

    };

    document.getElementById("selectPBtn").addEventListener("click", getParagraphs);
    document.getElementById("selectDivBtn").addEventListener("click", getDiv);
    document.getElementById("selectSpanBtn").addEventListener("click", getSpan);

};