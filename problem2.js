/**
 * Created by Berto on 11/17/16.
 */


var worditems = document.getElementsByTagName('strong');


var paragraph = document.getElementById("changetextcolor");

function changeColor() {

    for(var i =0 ; i < worditems.length ; i++){


        worditems[i].style.color = 'red';
    }



}

paragraph.addEventListener("mouseover", changeColor );
