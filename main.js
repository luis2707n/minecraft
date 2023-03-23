var canvas=new fabric.Canvas("Canvas");

steveX=10;
steveY=10;

bloque_ancho=30;
bloque_alto=30;

var steve_object="";
var bloque_object="";

function steve_cargar(){
    fabric.Image.fromURL("jugador.png",function(Img){
        steve_object=Img;
        steve_object.scaleToWidth(150);
        steve_object.scaleToHeight(140);
        steve_object.set({
            top:steveY,
            left:steveX
        });
        canvas.add(steve_object);
    });
}

function bloques(bloq_img){
    fabric.Image.fromURL(bloq_img,function(Img){
        bloque_object=Img;
        bloque_object.scaleToWidth(bloque_ancho);
        bloque_object.scaleToHeight(bloque_alto);
        bloque_object.set({
            top:steveY,
            left:steveX
        });
        canvas.add(bloque_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38"){
        arriba();
        console.log("arriba");
    }
    if (keyPressed=="40"){
        abajo();
        console.log("abajo");
    }
    if (keyPressed=="39"){
        derecha();
        console.log("derecha");
    }
    if (keyPressed=="37"){
        izquierda();
        console.log("izquierda");
    }
    if (keyPressed=="49"){
        bloques("madera.jpg");
        console.log("madera");
    }
    if (keyPressed=="50"){
        bloques("tierra.png");
        console.log("tierra");
    }
    if (keyPressed=="51"){
        bloques("ladrillo.jpg");
        console.log("ladrillo");
    }
    if (keyPressed=="52"){
        bloques("piedra.png");
        console.log("piedra");
    }
    if (keyPressed=="53"){
        bloques("cristal.png");
        console.log("cristal");
    }
    if (keyPressed=="54"){
        bloques("tnt.jpg");
        console.log("tnt");
    }
    if (keyPressed=="55"){
        bloques("luz.png");
        console.log("piedra luminosa");
    }
    if (e.shiftKey==true&&keyPressed=="187"){
        bloque_ancho=bloque_ancho+10;
        bloque_alto=bloque_alto+10;
        console.log("aumentando tamaño");
        document.getElementById("ancho_actual").innerHTML=bloque_ancho;
        document.getElementById("altura_actual").innerHTML=bloque_alto;
    }
    if (e.shiftKey==true&&keyPressed=="189"){
        bloque_ancho=bloque_ancho-10;
        bloque_alto=bloque_alto-10;
        console.log("disminuyendo tamaño");
        document.getElementById("ancho_actual").innerHTML=bloque_ancho;
        document.getElementById("altura_actual").innerHTML=bloque_alto;
    }
}

function arriba(){
    if(steveY>=0){
        steveY=steveY-bloque_alto;
        console.log("altura del bloque:"+bloque_alto);
        console.log("cordenadas: "+steveX+","+steveY);
        canvas.remove(steve_object);
        steve_cargar();
    }
    }

function abajo(){
    if (steveY<=600){
        steveY=steveY+bloque_alto;
        console.log("altura del bloque: "+bloque_alto);
        console.log("cordenadas: "+steveX+","+steveY);
        canvas.remove(steve_object);
        steve_cargar();
    }
}

function derecha(){
    if (steveX<=1000){
        steveX=steveX+bloque_ancho;
        console.log("ancho del bloque: "+bloque_ancho);
        console.log("cordenadaas: "+steveX+","+steveY);
        canvas.remove(steve_object);
        steve_cargar();
    }
}

function izquierda(){
    if (steveX>=0){
        steveX=steveX-bloque_ancho;
        console.log("ancho del bloque: "+bloque_ancho);
        console.log("cordenadas: "+steveX+","+steveY);
        canvas.remove(steve_object);
        steve_cargar();
    }
}