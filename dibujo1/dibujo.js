var texto=document.getElementById("texto_lineas");
var tboton=document.getElementById("botoncito");
botoncito.addEventListener("click",dibujoPorClick );

var d=document.getElementById("dibujito");
var lienzo= d.getContext("2d");
var pix= d.width;

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
function dibujoPorClick()
{
  var tex = parseInt(texto.value);
  var lineas=tex;
  var ancho=(pix/tex);
  var l=0;
  var x=0;
  var y=0;
  while (l<lineas)
  {
    dibujar_linea("red",0,y,x,300);
    dibujar_linea("green",x,0,300,y);
    dibujar_linea("blue",x,300,300,(300-y));
    dibujar_linea("yellow",(300-x),0,0,y);
    l=l+1;
    x=x+ancho;
    y=y+ancho;
  }
  //alert("no tocar "+ tex);

}
