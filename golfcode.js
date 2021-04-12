const click = document.getElementById("tick").onclick = golfScore;


function golfScore(par, strokes) {

   par = Math.floor(Math.random()*10);
   document.getElementById("par").innerHTML = par;
   stroke = Math.floor(Math.random()*10)
   document.getElementById("stroke").innerHTML = stroke;

   return (stroke == 1) ? document.getElementById("output").innerText = "“Hole-in-one!”":
   (stroke <= par -2) ? document.getElementById("output").innerText = "“Eagle”":
   (stroke == par -1) ? document.getElementById("output").innerText = "“Birdie”":
   (stroke == par ) ? document.getElementById("output").innerText = "“Par”":
   (stroke == par +1) ? document.getElementById("output").innerText = "“Bogey”":
   (stroke == par +2) ? document.getElementById("output").innerText = "“Double Bogey”":
   document.getElementById("output").innerHTML = "“Go Home!”"

}
