
let b2 = document.getElementById('b1');
b2.addEventListener("submit",hi);

let a6 = document.getElementById('a5');
let c2 = document.getElementById('c1');
const mot =[
"انتي بتقدري طبعاا",
"  A+  انا شايفه ال",
"قربتي يا احسن مهندسه",
" wooow iam so impressed  ",
"keeep goinnggggg",
"يلا كملي الموتفيشن نتلاقى بكرا",
" the best engineer in the world  "
]

function hi(event)
{
    event.preventDefault();
let b4= parseInt(document.getElementById('timer').value);
let b8 = b4;
hi2();

function hi2(){
 if (b4>= 0)
 {
   a6.textContent= b4;
 }
 if(b4>10)
 {
   if(((b8-b4)%5 == 0 )&& ((b8 - b4 )!= 0))
{
  const randomIndex = Math.floor(Math.random() * mot.length);
 const randomMessage = mot[randomIndex];

  c2.textContent = randomMessage;

}


 }
 b4--;
setTimeout( hi2 ,1000);





}



}