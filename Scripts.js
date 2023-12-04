/*JavaScript Codes */
/* This code was inspired by the following websites:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle  and: https://blog.hubspot.com/website/call-javascript-function-html Code was kinda copied and modified to be simpler  */
/*Accordian function by FayB used for newsletter articles to apear when clicked*/
function Accordian() {
    document.getElementsByClassName("ExpandingButton");
    var PlsWork = this.nextElementSibling;
    if (PlsWork.style.display === "none"){PlsWork.style.display = "block";
    }else{PlsWork.style.display = "none";}
  }

var acc = document.getElementsByClassName("ExpandingButton");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var Article = this.nextElementSibling;
    if (Article.style.display === "block") {
      Article.style.display = "none";
    } else {
      Article.style.display = "block";
    }
  });
}


/*Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


