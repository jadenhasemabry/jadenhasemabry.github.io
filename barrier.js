   var barrier = new barrier();
  var barrierX = 40;
  var barrierY = 100;
  function barrier(){
    this.x = w;
    this.y = Math.floor(Math.random() * h)-50;
    
    var speed = 10;
    var score = 0;
  this.show = function (){
         fill(color("blue"));
         rect(this.x, this.y, barrierX, barrierY);
       };
  this.move = function (){
         if (this.x > 0){
           this.x -= speed;
         }
         else{
           this.x = w;
           this.y = Math.floor(Math.random() * h)-50;
          speed += 0.5;
          score += 1;
          barrierY += 3;
         }
       };
  this.score = function (){
    document.getElementById('score').innerHTML = "Score:" + score;
  };
  }
  