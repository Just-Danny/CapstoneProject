//Slideshows on Index page using images in arrays
//left Slideshow on index Page
var slideArray = new Array("images/images.jpeg", "images/images2.jpeg", "images/images3.jpeg");
var Img_Length  = slideArray.length;
var picNum = 0;
function slideshow() {
    var Img_Length  = slideArray.length
    if(picNum >= Img_Length) {
        picNum = 0; // If the current image is the last one in the array, reset the slideshow
    }
    document.getElementById("slideshow").src = slideArray[picNum];
    picNum++;// switches image
}

//middle Slideshow on index Page
var slideArray2 = new Array("images/images4.jpeg", "images/images5.jpeg", "images/images6.jpeg");
var Img_Length2  = slideArray2.length;
var picNum2 = 0;
function slideshow2() {
    var Img_Length2  = slideArray2.length
    if(picNum2 >= Img_Length2) {
        picNum2 = 0;
    }
    document.getElementById("slideshow2").src = slideArray2[picNum2];
    picNum2++;
}

//right Slideshow on index Page
var slideArray3 = new Array("images/images7.jpeg", "images/images8.jpeg", "images/images9.jpeg");
var Img_Length3  = slideArray3.length;
var picNum3 = 0;
function slideshow3() {
    var Img_Length3  = slideArray3.length
    if(picNum3 >= Img_Length3) {
        picNum3 = 0; 
    }
    document.getElementById("slideshow3").src = slideArray3[picNum3];
    picNum3++;
}
function auto(){
    setInterval(slideshow, 3000);// Sets slideshow timer on 3 seconds
    setInterval(slideshow2, 3000);
    setInterval(slideshow3, 3000);
}
window.onload = auto; //event fires as soon as the window loads
//when window loads the slideshow will start after about 6 seconds when the page is on-screen

//function for submitting feedback on contacts page

function Fsubmit(){
    var F=document.getElementById("Fname").value;
var L=document.getElementById("Lname").value;
var Ta=document.getElementById("TA").value;
    if(F == "" && L=="" && Ta==""){
    alert("Please try Again");
        return false;
    }
    else{
        alert("Thank you for the Feedback");
    }
    console.log(F);
    console.log(L);
    console.log(Ta);
}