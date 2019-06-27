
var teclas= {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);
document.addEventListener("keyup",dibujarTeclado);
var cuadrito= document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x= 150;
var y= 150;

dibujar_linea("red",x-1, y-1, x+1, y+1, papel);

function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.lineWidth= 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujarTeclado(evento)
{
  var col= "green";
  var movimiento =10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujar_linea(col,x,y,x,(y-movimiento), papel);
      y=y-movimiento;
      console.log("arriba");
    break;
    case teclas.DOWN:
    dibujar_linea(col,x,y,x,(y+movimiento), papel);
    y=y+movimiento;
      console.log("abajo");
    break;
    case teclas.LEFT:
    dibujar_linea(col,x,y,(x-movimiento),y, papel);
    x=x-movimiento;
      console.log("izquierda");
    break;
    case teclas.RIGHT:
    dibujar_linea(col,x,y,(x+movimiento),y, papel);
    x=x+movimiento;
      console.log("derecha");
    break;
    default:
    console.log("otra tecla");
    break;
  }
  if (evento.keyCode == teclas.UP)
  {
    console.log("vamos para arriba");
  }
  if (evento.keyCode == teclas.DOWN)
  {
    console.log("vamos para abajo");
  }
  if (evento.keyCode == teclas.LEFT)
  {
    console.log("vamos para izquierda");
  }
  if (evento.keyCode == teclas.RIGHT)
  {
    console.log("vamos para derecha");
  }
}
