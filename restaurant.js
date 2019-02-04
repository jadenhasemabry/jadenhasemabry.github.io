 var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var mydata = JSON.parse(this.responseText);
            window.alert(mydata.food[0].name);
        }
      };
      xmlhttp.open("GET", "restaurant.json", true);
      xmlhttp.send();

function food1(){
  document.getElementById('pic').style.backgroundImage ="url(http://nebula.wsimg.com/73984f448dd8674bf636fcdb4fe360e9?AccessKeyId=DEC0FC211629198B3546&disposition=0&alloworigin=1)";
   foodpage = 1;
}

function food2(){
  document.getElementById('pic').style.backgroundImage ="url(https://foodchannelcom.files.wordpress.com/2017/05/rigatoni-alla-buttera-1920x1280.jpg?w=1000&h=600&crop=1)";
   foodpage = 2;

}

function food3(){
  document.getElementById('pic').style.backgroundImage ="url(https://images-gmi-pmc.edge-generalmills.com/e09feb64-db4c-4fa8-859d-0466a5823d85.jpg)";
   foodpage = 3;
}

function food4(){
  document.getElementById('pic').style.backgroundImage ="url(https://static01.nyt.com/images/2016/05/24/dining/24COOKING-BANANA-ICE-CREAM1/24COOKING-BANANA-ICE-CREAM1-threeByTwoMediumAt2X-v2.jpg)";
   foodpage = 4;

}

function food5(){
  document.getElementById('pic').style.backgroundImage ="url(https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/burger_0.gif?itok=PTqyN69b)";
   foodpage = 5;

}

function food6(){
  document.getElementById('pic').style.backgroundImage ="url(https://static01.nyt.com/images/2015/10/30/dining/30COOKING-MASHEDPOTATOES1/30COOKING-MASHEDPOTATOES1-superJumbo.jpg)";
   foodpage = 6;
  
}

function add(){
 if(foodpage == 1){
  var food1 = 1;
  document.getElementById('pay1').innerHTML = "Marinated barbeque ribs" + " " +  "x"
 }
  else if (foodpage == 2){
  var food2 = 1;
  document.getElementById('pay2').innerHTML = "Rigatoni pasta" + " " +  "x"
 }
 
 else if (foodpage == 3){
  var food3 = 1;
  document.getElementById('pay3').innerHTML = "Salmon fillet" + " " +  "x"
 }
 
 else if (foodpage == 4){
  var food4 = 1;
  document.getElementById('pay4').innerHTML = "Chilled ice cream" + " " +  "x"
 }
 
 else if (foodpage == 5){
  var food5 = 1;
  document.getElementById('pay5').innerHTML = "American-style Burger and fries" + " " +  "x"
 }
 
 else if (foodpage == 6){
  var food6 = 1;
  document.getElementById('pay6').innerHTML = "Mashed potatoes" + " " +  "x"
 }
}



function subtract(){
 if(foodpage == 1){
  var food1 = 1;
  document.getElementById('pay1').innerHTML = "Marinated barbeque ribs" + " " +  "x"
 }
  else if (foodpage == 2){
  var food2 = 1;
  document.getElementById('pay2').innerHTML = "Rigatoni pasta" + " " +  "x"
 }
 
 else if (foodpage == 3){
  var food3 = 1;
  document.getElementById('pay3').innerHTML = "Salmon fillet" + " " +  "x"
 }
 
 else if (foodpage == 4){
  var food4 = 1;
  document.getElementById('pay4').innerHTML = "Chilled ice cream" + " " +  "x"
 }
 
 else if (foodpage == 5){
  var food5 = 1;
  document.getElementById('pay5').innerHTML = "American-style Burger and fries" + " " +  "x"
 }
 
 else if (foodpage == 6){
  var food6 = 1;
  document.getElementById('pay6').innerHTML = "Mashed potatoes" + " " +  "x"
 }
}

function total() {
  
}
