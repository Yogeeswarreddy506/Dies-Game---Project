function roll(){
var randomnumber1=Math.floor(Math.random()*6+1);
var randomdiceimage1="dice"+randomnumber1+".png";
var randomeimage1="images/" +randomdiceimage1;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src", randomeimage1);


var randomnumber2=Math.floor(Math.random()*6+1);
var randomdiceimage2="dice"+randomnumber2+".png";
var randomeimage2="images/" +randomdiceimage2;
var image2=document.querySelectorAll("img")[2];
image2.setAttribute("src", randomeimage2);  


if(randomnumber1>randomnumber2){
 document.getElementById("res").innerHTML="Player 1️⃣ Win The Match..... 😊😊😊😊!";
}
else if(randomnumber1<randomnumber2){
    document.getElementById("res").innerHTML="Player 2️⃣ Win The Match.....😊😊😊😊!"
}
else{
    document.getElementById("res").innerHTML="Draw The Match....😂😂😂😂!"
}

}
