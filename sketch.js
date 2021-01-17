var dog, dogImage, happyDog;
var database;
var foodStock;
var milkBottleImg;
var foodObg;

var milkBtt1;
var milkBtt2;
var milkBtt3;
var milkBtt4;
var milkBtt5;
var milkBtt6;
var milkBtt7;
var milkBtt8;
var milkBtt9;
var milkBtt10;
var milkBtt11;
var milkBtt12;
var milkBtt13;
var milkBtt14;
var milkBtt15;
var milkBtt16;
var milkBtt17;
var milkBtt18;
var milkBtt19;
var milkBtt20;

var fedTime = 12;
var lastFedTime = 0;

var foodButton;
var resetFoodButton;




function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
  milkBottleImg = loadImage("Milk.png")
}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  database.ref('/').update({
    Food:20
  })
  dog = createSprite(750, 250, 100, 100);
  dog.scale = 0.3;
  dog.addImage(dogImage);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodObj = new Food();
  foodObj.getFoodStock();
  foodObj.display(150, 250);
  foodButton = createButton('Feed Dog');
  resetFoodButton = createButton('Reset Food');
  foodButton.position(750, 550);
  resetFoodButton.position(650, 550);

  
}


function draw() {  
  background(46, 139, 87);

  foodButton.mousePressed(()=>{
    writeStock(foodStock);
   
    if(foodStock>0){
      if(fedTime === 1){
        lastFedTime = 1;
      }
      if(fedTime === 2){
        lastFedTime = 2;
      }
      if(fedTime === 3){
        lastFedTime = 3;
      }
      if(fedTime === 4){
        lastFedTime = 4;
      }
      if(fedTime === 5){
        lastFedTime = 5;
      }
      if(fedTime === 6){
        lastFedTime = 6;
      }

      if(fedTime === 7){
        lastFedTime = 7;
      }
      if(fedTime === 8){
        lastFedTime = 8;
      }
      if(fedTime === 9){
        lastFedTime = 9;
      }
      if(fedTime === 10){
        lastFedTime = 10;
      }
      if(fedTime === 11){
        lastFedTime = 11;
      }
      if(fedTime === 12){
        lastFedTime = 12;
      }
    }
  });
  resetFoodButton.mousePressed(()=>{
    database.ref('/').update({
      Food:20
    })
    milkBtt1.visible = true;
    milkBtt2.visible = true;
    milkBtt3.visible = true;
    milkBtt4.visible = true;
    milkBtt5.visible = true;
    milkBtt6.visible = true;
    milkBtt7.visible = true;
    milkBtt8.visible = true;
    milkBtt9.visible = true;
    milkBtt10.visible = true;
    milkBtt11.visible = true;
    milkBtt12.visible = true;
    milkBtt13.visible = true;
    milkBtt14.visible = true;
    milkBtt15.visible = true;
    milkBtt16.visible = true;
    milkBtt17.visible = true;
    milkBtt18.visible = true;
    milkBtt19.visible = true;
    milkBtt20.visible = true;
  })
  

  
  
  
  if(foodStock === 19){
    milkBtt20.visible = false;
    
  }
  if(milkBtt20.x > 690){
    
  }
  if(foodStock === 18){
    milkBtt19.visible = false;
    
  }
  if(milkBtt19.x > 690){
    
  }
  if(foodStock === 17){
    milkBtt18.visible = false;
    
  }
  if(milkBtt18.x > 690){
    
  }
  if(foodStock === 16){
    milkBtt17.visible = false;
    
  }
  if(milkBtt17.x > 690){
    
  }
  if(foodStock === 15){
    milkBtt16.visible = false;
    
  }
  if(milkBtt16.x > 690){
    
  }
  if(foodStock === 14){
    milkBtt15.visible = false;
    
  }
  if(milkBtt15.x > 690){
    
  }
  if(foodStock === 13){
    milkBtt14.visible = false;
    
  }
  if(milkBtt14.x > 690){
    
  }
  if(foodStock === 12){
    milkBtt13.visible = false;
    
  }
  if(milkBtt13.x > 690){
    
  }
  if(foodStock === 11){
    milkBtt12.visible = false;
    
  }
  if(milkBtt12.x > 690){
    
  }
  if(foodStock === 10){
    milkBtt11.visible = false;
    
  }
  if(milkBtt11.x > 690){
    
  }
  if(foodStock === 9){
    milkBtt10.visible = false;
    
  }
  if(milkBtt10.x > 690){
    
  }
  if(foodStock === 8){
    milkBtt9.visible = false;
    
  }
  if(milkBtt9.x > 690){
    
  }
  if(foodStock === 7){
    milkBtt8.visible = false;
    
  }
  if(milkBtt8.x > 690){
    
  }
  if(foodStock === 6){
    milkBtt7.visible = false;
    
  }
  if(milkBtt7.x > 690){
    
  }
  if(foodStock === 5){
    milkBtt6.visible = false;
    
  }
  if(milkBtt6.x > 690){
    
  }
  if(foodStock === 4){
    milkBtt5.visible = false;
    
  }
  if(milkBtt5.x > 690){
    
  }
  if(foodStock === 3){
    milkBtt4.visible = false;
    
  }
  if(milkBtt4.x > 690){
    
  }
  if(foodStock === 2){
    milkBtt3.visible = false;
    
  }
  if(milkBtt3.x > 690){
    
  }
  if(foodStock === 1){
    milkBtt2.visible = false;
    
  }
  if(milkBtt2.x > 690){
    
  }
  if(foodStock === 0){
    milkBtt1.visible = false;
    
  }
  if(milkBtt1.x > 690){
    
  }
  
  
  drawSprites();
  textSize(30);
  fill ("white");
  stroke ("black");
  text("Food: " + foodStock, 200, 50);
    
    var fedTime2 = World.seconds;
    if(fedTime2%60 === 0&&fedTime2>0){
      fedTime = fedTime2/60;
    }
    console.log(fedTime)
   
  text("Last fed: " + lastFedTime, 500, 50);
    
  //add styles here

}
function readStock(data){
  foodStock = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}



