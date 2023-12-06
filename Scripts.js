/*JavaScript Codes */

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

/*java needed on the responsiv navbar*/
/*Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function pickles(sw) {
 	 var pic;
  	if (sw == 0) {
   	 pic = "7pickles.jpg"
  	} else {
    	pic = "9peicesofgum.jpg"
 	 }
  	document.getElementById('myImage').src = pic;
	}
function grapes(sw) {
 	 var pic;
  	if (sw == 0) {
   	 pic = "grapes.png"
  	} else {
    	pic = "apples.jpg"
 	 }
  	document.getElementById('myImage2').src = pic;
	}
