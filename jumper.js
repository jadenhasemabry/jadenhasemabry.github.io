   var w = window.innerWidth;
   var h = window.innerHeight;
   var jumper = new jumper();
   
     function setup(){
       createCanvas(w,h);
        img = loadImage('https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
        badguy = loadImage('https://vignette.wikia.nocookie.net/jack-millers-webpage-of-disney/images/0/03/Mike.png/revision/latest?cb=20150615014349');
        meatwad = loadImage('https://upload.wikimedia.org/wikipedia/en/4/4e/Meatwad.png');
        carl = loadImage('https://vignette.wikia.nocookie.net/p__/images/0/00/Carl_Brutananadilewski.png/revision/latest?cb=20130727131835&path-prefix=protagonist');
        city = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Long_Island_City_New_York_May_2015_panorama_3.jpg/1000px-Long_Island_City_New_York_May_2015_panorama_3.jpg');
        lava = loadImage('https://3iom3142cnb81rlnt6w4mtlr-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/Lava_Rivers.jpg');
        fire = loadImage('https://images.vexels.com/media/users/3/145649/isolated/preview/134f04c28706590f49a00517b7792901-fire-flame-cartoon-by-vexels.png');
        water = loadImage('https://wildaid.org/wp-content/uploads/2017/09/dark-blue-ocean-surface-seen-from-underwater-looped-slow-motion-fractal-waves-underwater-and-rays-of-sunlight-shining-through-4k-seamless-loop-video_hy1i0dcrl_thumbnail-full01.png');
        whale = loadImage('https://images-na.ssl-images-amazon.com/images/I/61FxUEeJHvL._SX425_.jpg');
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
        barrier.environment();
     }
     function jumper(){
       this.x = 50;
       this.y = 0;
       this.gravity = 0.5;//force of gravity//
       this.lift = -10; //opposing gravity force//
       this.velocity = 0; //velocity of player//
      
       this.show = function (){
         image(meatwad,this.x, this.y, 50, 50);
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
        if (keyCode === 82){
          window.location = "elements.html";

        }
     }
    
     
