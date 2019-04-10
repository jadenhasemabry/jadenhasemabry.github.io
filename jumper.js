 var w = window.innerWidth;
   var h = window.innerHeight;
   var jumper = new jumper();

     function setup(){
       createCanvas(w,h);
        img = loadImage('https://ichef.bbci.co.uk/news/660/cpsprodpb/B7B0/production/_101542074_gettyimages-956391468.jpg');

     }
     function draw(){
        background(img);
        jumper.show();
        jumper.update();
        jumper.move();
        jumper.collide();
        barrier.show();
        barrier.move();
        barrier.score();
     }
     function jumper(){
       this.x = 50;
       this.y = 0;
       this.gravity = 0.5;//force of gravity//
       this.lift = -10; //opposing gravity force//
       this.velocity = 0; //velocity of player//
      
       this.show = function (){
         fill(color('black'));
         rect(this.x, this.y, 50, 50);
       };
       
       this.up = function(){
         this.velocity += this.lift;
         this.velocity += this.gravity;
       };
       
       this.update = function(){
         this.velocity += this.gravity;
         this.y += this.velocity;
         this.velocity *= 0.9;
         if (this.y > h-50){
           this.y = h-50;
           this.velocity = 0;
         }
         if (this.y < 0 ){
           this.y = 0;
           this.velocity = 0;
         }
       };
       this.move = function(){
           if(keyIsDown(68) && (w - 50 > this.x)){
            this.x += 5;
             }
           if(keyIsDown(65) && (this.x > 0)){
            this.x -= 5;
}
       };
       this.collide = function(){
         if (collideRectRect(barrier.x,barrier.y,barrierX,barrierY,this.x,this.y,50,50)){
           noLoop();
         }
         
       };
     }
     function keyPressed() {
        if (keyCode === 32){
          jumper.up();
        }
     }
     
