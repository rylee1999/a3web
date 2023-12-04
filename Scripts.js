/*JavaScript Codes */
/* This code was inspired by the following websites:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle  and: https://blog.hubspot.com/website/call-javascript-function-html Code was kinda copied and modified to be simpler  */
/*Accordian function by FayB */
function Accordian() {
    document.getElementsByClassName("ExpandingButton");
    var PlsWork = this.nextElementSibling;
    if (PlsWork.style.display === "none"){PlsWork.style.display = "block";
    }else{PlsWork.style.display = "none";}
  }
