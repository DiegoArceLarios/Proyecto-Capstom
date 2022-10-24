var manoI,manoD,manoDImg,manoIImg;
var m1Img,m2Img,m3Img,m4Img,m5Img,mGroup;
var arbolImg,arbolGroup,arbol1Group;
var miraImg,mira;
var fondo,fondoImg;
var n,m,a,b,c,x,y,z,k,j,u,t;
var verde;
var roca1,roca2,roca3;
var rock;
var rocaGroup;
var categorias;
var monstrito;
var img1,img2,img3,img4,img5;
var cuadro;
var time;
var loser,loserImg;


function preload(){
 manoIImg = loadImage("mano izquierda.png");
 manoDImg = loadImage("mano derecha.png");
 arbolImg = loadImage("arbol.png");
 m1Img = loadImage("m1.png");
 m2Img = loadImage("m2.png");
 m3Img = loadImage("m3.png");
 m4Img = loadImage("m4.png");
 m5Img = loadImage("m5.png");
 fondoImg = loadImage("noche 1.png");
 roca1 = loadImage("roca1.png");
 roca2 = loadImage("roca2.png");
 roca3 = loadImage("roca3.png");
 miraImg = loadImage("mira.png");
 loserImg = loadImage ("loser.png");
}

function setup() {
 fondo = createSprite(675,300);
 fondo.addImage(fondoImg);
 fondo.scale = 2;
 fondo.depth = -1000;

 arbolGroup = new Group();
 arbol1Group = new Group();
 rocaGroup = new Group();
 mGroup = new Group();

 verde = createSprite(650,825,1350,1000);
 verde.shapeColor = "green";
 verde.depth = -999;
 n = 0.1;
 m = 0.1;

 manoD = createSprite(900,540);
 manoD.addImage(manoDImg);
 manoD.scale = 0.7;
 manoD.rotation = 30;
 manoD.depth = 1000;

 manoI = createSprite(400,760);
 manoI.addImage(manoIImg);
 manoI.scale = 0.7;
 manoI.rotation = -30;
 manoI.depth = 1000;

 mira = createSprite(675,300,1,1);
 mira.addImage(miraImg);
 mira.depth = 9000;

 img1 = createSprite(1270,5000,1,1);
 img1.addImage(m1Img);
 img1.scale = 0.2;
 img1.depth = 10000000;

 img2 = createSprite(1270,5000,1,1);
 img2.addImage(m2Img);
 img2.scale = 0.2;
 img2.depth = 10000000;

 img3 = createSprite(1270,5000,1,1);
 img3.addImage(m3Img);
 img3.scale = 0.2;
 img3.depth = 10000000;

 img4 = createSprite(1270,5000,1,1);
 img4.addImage(m4Img);
 img4.scale = 0.2;
 img4.depth = 10000000;

 img5 = createSprite(1270,5000,1,1);
 img5.addImage(m5Img);
 img5.scale = 0.2;
 img5.depth = 10000000;

 
 cuadro = createSprite(z,y,10,10);
 cuadro.depth = 20000000;
 cuadro.shapeColor = "Red";

 a = 0;
 b = 0.1;
 c = 1;
 x = 0;
 z = 2000;
 y = 5000;
 k = 0;
 j = 0;
 u = 0;
 t = 0;
 mira.depth = 30000000;

 time = createSprite(8000,8000,20,20);

 loser = createSprite(8000,300,1,1);
 loser.addImage(loserImg);
}

function draw() {
 createCanvas(1319,625);
 
 if (frameCount%1 === 0&&j<2){
    arbolGroup.setScaleEach(n);
    n = n+0.025;
 }
 if (frameCount%70 === 0&&j<2){
    n = 0.1;
    
 }

 if (frameCount%1 === 0&&j<2){
   arbol1Group.setScaleEach(m);
   m = m+0.025;
}
 if (frameCount%50 === 0&&j<2){
   m = 0.1;
   
}
if (j<2){

   if(frameCount%1 === 0&&j<2){
      mGroup.setScaleEach(b);
      b = b+0.025+((a*a)/10000);
   }

   if (frameCount%(80-(a)) === 0&&j<2){
      b = 0.1;

   }

}
if(a===24&&j<2){
    c = 0;


 }




   if (x === 1&&j<2){
      img1.setCollider("rectangle",20,50,50,100);
   }
   if (x === 2&&j<2){
      img1.setCollider("rectangle",-20,50,50,100);
   }

   if(j<2){
   if(manoD.y<550){
      manoI.velocityY = -10;
   }
   if(manoD.y>750){
      manoI.velocityY = 10;
   }

   if(manoI.y<550){
      manoD.velocityY = -10;
   }
   if(manoI.y>750){
      manoD.velocityY = 10;
   }
   }


   if(j===2){
      k = 1;
      arbol1Group.setVelocityYEach(0);
      arbolGroup.setVelocityYEach(0);
      rocaGroup.setVelocityYEach(0);
      arbol1Group.setVelocityXEach(0);
      arbolGroup.setVelocityXEach(0);
      rocaGroup.setVelocityXEach(0);
      manoD.velocityY = 0;   
      manoI.velocityY = 0; 
      manoD.lifetime = 0;  
      manoI.lifetime = 0;  
      cuadro.y = 100000;
      img1.y = 5000; 
      img2.y = 5000; 
      img3.y = 5000; 
      img4.y = 5000; 
      img5.y = 5000; 
      arbol1Group.setLifetimeEach(10000000);
      arbolGroup.setLifetimeEach(10000000);
      rocaGroup.setLifetimeEach(10000000);

      lose();

   }



if (mira.isTouching(mGroup)&&mouseIsPressed===true){
   mGroup.destroyEach();
   j = j-1;
}
   if(k === 1){
      mGroup.destroyEach();
   }

 manoD.depth = manoD.depth+20;
 manoI.depth = manoI.depth+20;
 mira.depth = mira.depth+100;

 mira.x = World.mouseX;
 mira.y = World.mouseY;
 
 manitas();
 monstritosAparecenYDestruyenTodoAsiQueHayQueDispararles();   
 arbolSpawn();
 rocaSpawn();
 background("white");
 drawSprites();
}


function arbolSpawn() {

    if (frameCount%70 === 0&&j<2){
        var arbol = createSprite(Math.round(random(200,250)),310);
        arbol.scale = 0.1;  
        arbol.addImage(arbolImg);
        arbol.depth = 1;
        
        arbol.velocityY = 2;
        arbol.velocityX = -8;
    
        arbol.lifetime = 150;
    
        arbolGroup.add(arbol);
    }

    if (frameCount%70 === 0&&j<2){
         var arbol1 = createSprite(Math.round(random(1075,1125)),310);
         arbol1.scale = 0.1;
         arbol1.addImage(arbolImg);
         arbol1.depth = 1;
      
         arbol1.velocityY = 2;
         arbol1.velocityX = 8;
      
         arbol1.lifetime = 150;
      
         arbolGroup.add(arbol1);
    }

    if (frameCount%50 === 0&&j<2){
      var arbol2 = createSprite(Math.round(random(1075,1125)),310);
      arbol2.scale = 0.1;
      arbol2.addImage(arbolImg);
      arbol2.depth = 2;
  
      arbol2.velocityY = 2;
      arbol2.velocityX = 8;
  
      arbol2.lifetime = 150;
  
      arbol1Group.add(arbol2);
   }
   if (frameCount%50 === 0&&j<2){
      var arbol3 = createSprite(Math.round(random(200,250)),310);
      arbol3.scale = 0.1;  
      arbol3.addImage(arbolImg);
      arbol3.depth = 2;
      
      arbol3.velocityY = 2;
      arbol3.velocityX = -8;

      arbol3.lifetime = 150;

      arbol1Group.add(arbol3);
   }

}
function rocaSpawn(){
   if(frameCount%40 === 0&&j<2){
      var roca = createSprite(200,350,1,1);
      roca.x = Math.round(random(200,1100));
      roca.velocityY = 4;
      roca.depth = 0;
      roca.scale = 0.15;
      roca.lifetime = 200;
      if(roca.x < 650){
         roca.velocityX = (roca.x - 650)/100
      }
      if(roca.x > 650){
         roca.velocityX = (roca.x - 650)/100;
      }

      
      rock = Math.round(random(1,3));
      switch(rock){
         case 1:
            roca.addImage(roca1);
            break
         case 2:
            roca.addImage(roca2);
            break
         case 3:
            roca.addImage(roca3);
            break
         default:

            break
                  
         

      }
      rocaGroup.add(roca);

   }

   
}

function manitas (){

}

function monstritosAparecenYDestruyenTodoAsiQueHayQueDispararles(){


  if (j<2){
   if(frameCount%(80-(a))===0){
      mGroup.destroyEach();
      monstrito = createSprite(200,300);
      monstrito.x = Math.round(random(300,1000));
      categorias = Math.round(random(1,5));
      switch(categorias){
         case 1:
            monstrito.addImage(m1Img);
            x = Math.round(random(1,2));
            monstrito.setCollider("rectangle",0,50,50,100);
            img1.y = 50;
            img2.y = 5000;
            img3.y = 5000;
            img4.y = 5000;
            img5.y = 5000;
            break
         case 2:
            monstrito.addImage(m2Img);
            monstrito.setCollider("circle",0,-120,50);
            x = 0;
            img1.y = 5000;
            img2.y = 50;
            img3.y = 5000;
            img4.y = 5000;
            img5.y = 5000;
            cuadro.y = 30;
            cuadro.x = 1270;
            break
         case 3:
            monstrito.addImage(m3Img);
            monstrito.setCollider("circle",00,-150,30);
            x = 0;
            img1.y = 5000;
            img2.y = 5000;
            img3.y = 50;
            img4.y = 5000;
            img5.y = 5000;
            cuadro.y = 20;
            cuadro.x = 1270;
            break
         case 4:
            monstrito.addImage(m4Img);
            monstrito.setCollider("rectangle",0,-80,50,75);
            x = 0;
            img1.y = 5000;
            img2.y = 5000;
            img3.y = 5000;
            img4.y = 50;
            img5.y = 5000;
            cuadro.y = 35;
            cuadro.x = 1270;
            break
         case 5:
            monstrito.addImage(m5Img);
            monstrito.setCollider("rectangle",-20,-100,75,75);
            x = 0;
            img1.y = 5000;
            img2.y = 5000;
            img3.y = 5000;
            img4.y = 5000;
            img5.y = 50;
            cuadro.y = 32;
            cuadro.x = 1265;
            break
      }
      if (x === 1){
      monstrito.setCollider("rectangle",20,50,50,100);
      cuadro.y = 60;
      cuadro.x = 1275;
      }
      if (x === 2){
      monstrito.setCollider("rectangle",-20,50,50,100);
      cuadro.y = 60;
      cuadro.x = 1265;
      }

      monstrito.scale = 0.2;
      monstrito.depth = 3;
      monstrito.lifetime = 80-(a);
      monstrito.velocityY = 2;
      monstrito.debug = false;
      a = a+c;
      mGroup.add(monstrito);
      j = j+1;
   }
}
 

}

function lose(){
   if (u === 0){
 
   time.lifetime = 100;
   u = 1;
   }

   if(time.lifetime === 0){
      arbol1Group.setVelocityYEach(-20);
      arbolGroup.setVelocityYEach(-20);
      rocaGroup.setVelocityYEach(-20);
      verde.velocityY = -20;
      t = 1;
   }

   if (verde.y<300){
      verde.velocitY = 0;
      verde.y = 250;
      loser.x = 675;
   }

}


