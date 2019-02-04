 var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var mydata = JSON.parse(this.responseText);
            window.alert(mydata.food[0].name);
        }
      };
      xmlhttp.open("GET", "restaurant.json", true);
      xmlhttp.send();

function add(){
  //Have two buttons, add and subtract, and use if statements to change their functions.
  //DONT USE MULTIPLE FUCNTIONS//
}

function food1(){
  document.getElementById('pic').style.backgroundImage ="url(http://nebula.wsimg.com/73984f448dd8674bf636fcdb4fe360e9?AccessKeyId=DEC0FC211629198B3546&disposition=0&alloworigin=1)";
  var foodpage = 1;
}

function food2(){
  document.getElementById('pic').style.backgroundImage ="url(https://foodchannelcom.files.wordpress.com/2017/05/rigatoni-alla-buttera-1920x1280.jpg?w=1000&h=600&crop=1)";
  var foodpage = 2;
}

function food3(){
  document.getElementById('pic').style.backgroundImage ="url(https://images-gmi-pmc.edge-generalmills.com/e09feb64-db4c-4fa8-859d-0466a5823d85.jpg)";
  var foodpage = 3;

}

function food4(){
  document.getElementById('pic').style.backgroundImage ="url(https://static01.nyt.com/images/2016/05/24/dining/24COOKING-BANANA-ICE-CREAM1/24COOKING-BANANA-ICE-CREAM1-threeByTwoMediumAt2X-v2.jpg)";
  var foodpage = 4;

}

function food5(){
  document.getElementById('pic').style.backgroundImage ="url(https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/burger_0.gif?itok=PTqyN69b)";
  var foodpage = 5;

}

function food6(){
  document.getElementById('pic').style.backgroundImage ="url(https://static01.nyt.com/images/2015/10/30/dining/30COOKING-MASHEDPOTATOES1/30COOKING-MASHEDPOTATOES1-superJumbo.jpg)";
  var foodpage = 6;

}

function price(){
  if(foodpage == 1){
    document.getElementById('price').innerHTML = "10.99";
  }
}



