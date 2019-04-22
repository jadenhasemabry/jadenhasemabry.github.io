  var barrier = new barrier();
  var barrierX = 100;
  var barrierY = 100;
  var barcolor = "green";
  function barrier(){
    this.x = w;
    this.y = Math.floor(Math.random() * h)-50;
    var speed = 10
    var score = 0;
  this.show = function (){
         image(badguy, this.x, this.y, barrierX, barrierY);
       };
  this.move = function (){
         if (this.x > 0){
           this.x -= speed;
         }
         else{
           this.x = w;
           this.y = Math.floor(Math.random() * h)-50;
          score += 1;
          speed = 10 + (score * 0.2);
         }
       };
  this.score = function (){
    document.getElementById('score').innerHTML = "Score:" + score + " Press R to restart";
  };
  this.environment = function (){
    //city level//
    if (score > 24){
      badguy = carl;
      img = city;
    }
    //lava level//
    if (score > 49){
      img = lava;
      badguy = fire;
      barrierX = 50;
      barrierY = 50;
      speed += 1;
    }
    //water level//
    if (score > 59){
      img = water;
      badguy = whale;
      barrierX = 750;
      barrierY = 500;
      speed = 7;
    }
  };
  
  
  
  
  }

  