var d=document.getElementById("dibujito");
var lienzo= d.getContext("2d");
var lineas=60;
var lineas2=30
var l=0;
var l2=0;
var x=0;
var y=5;

while (l2<lineas2) {
    dibujar_linea("black",150,y,(150+x),150);
    dibujar_linea("black",150,y,(150-x),150);
    dibujar_linea("black",(0+x),150,150,(150+y));
    dibujar_linea("black",(300-x),150,150,(150+y));
    dibujar_linea("black",150,150,150,300);
    l2=l2+1;
    x=x+5;
    y=y+5;
}

while (l<lineas)
{
  dibujar_linea("red",0,y,x,300);
  dibujar_linea("green",x,0,300,y);
  dibujar_linea("blue",x,300,300,(300-y));
  dibujar_linea("yellow",(300-x),0,0,y);
  l=l+1;
  x=x+5;
  y=y+5;
}
dibujar_linea("green",1,1,1,299);
dibujar_linea("green",1,299,299,299);
dibujar_linea("green",299,299,299,1);
dibujar_linea("green",299,1,1,1);
function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
