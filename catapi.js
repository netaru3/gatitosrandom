const img= document.createElement('img');
let num= Math.floor(Math.random() * (103 - 100 + 1)) + 100;
let num2= Math.floor(Math.random() * (208 - 200 + 1)) + 200;
let num3= 214
let num4= 226
let num5= Math.floor(Math.random() * (308 - 300 + 1)) + 300;
let num6= Math.floor(Math.random() * (429 - 400 + 1)) + 400;
let num7= 431
let num8= 444
let num9= 450
let num10= 451
let num11= Math.floor(Math.random() * (511 - 495 + 1)) + 495;
let num12= Math.floor(Math.random() * (523 - 521 + 1)) + 521;
let num13= 525
let num14= 530
let num15= 599
let imagenes=[num,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12,num13,num14,num15]
console.log(imagenes)
let codigo=imagenes[ Math.floor(Math.random() * (14))]
fetch(`https://http.cat/${codigo}`)

img.src=`https://http.cat/${codigo}`
document.body.appendChild(img)