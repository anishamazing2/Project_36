class Food{
    constructor(){
        
        
    }
    
    getFoodStock(){
        var FoodRef  = database.ref('Food');
        FoodRef.on("value",function(data){
           foodStock = data.val();
        })
    
      }
    
    updateFoodStock(x){
        database.ref('/').update({
            Food: x
        });
    }
    deductFoodStock(x){
        if(x <= 0){
            x = 0;
        }
        else{
            x = x-1;
        }
        database.ref('/').update({
            Food: x
        });
    }
    display(x, y){
        milkBtt1 = createSprite(x = x + 40, y, 20, 20);
        milkBtt1.addImage(milkBottleImg);
        milkBtt1.scale = 0.3;
        milkBtt2 = createSprite(x = x + 40, y, 20, 20);
        milkBtt2.addImage(milkBottleImg);
        milkBtt2.scale = 0.3;
        milkBtt3 = createSprite(x = x + 40, y, 20, 20);
        milkBtt3.addImage(milkBottleImg);
        milkBtt3.scale = 0.3;
        milkBtt4 = createSprite(x = x + 40, y, 20, 20);
        milkBtt4.addImage(milkBottleImg);
        milkBtt4.scale = 0.3;
        milkBtt5 = createSprite(x = x + 40, y, 20, 20);
        milkBtt5.addImage(milkBottleImg);
        milkBtt5.scale = 0.3;
        milkBtt6 = createSprite(x = x + 40, y, 20, 20);
        milkBtt6.addImage(milkBottleImg);
        milkBtt6.scale = 0.3;
        milkBtt7 = createSprite(x = x + 40, y, 20, 20);
        milkBtt7.addImage(milkBottleImg);
        milkBtt7.scale = 0.3;
        milkBtt8 = createSprite(x = x + 40, y, 20, 20);
        milkBtt8.addImage(milkBottleImg);
        milkBtt8.scale = 0.3;
        milkBtt9 = createSprite(x = x + 40, y, 20, 20);
        milkBtt9.addImage(milkBottleImg);
        milkBtt9.scale = 0.3;
        milkBtt10 = createSprite(x = x + 40, y, 20, 20);
        milkBtt10.addImage(milkBottleImg);
        milkBtt10.scale = 0.3;
        x = x-400
        milkBtt11 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt11.addImage(milkBottleImg);
        milkBtt11.scale = 0.3;
        milkBtt12 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt12.addImage(milkBottleImg);
        milkBtt12.scale = 0.3;
        milkBtt13 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt13.addImage(milkBottleImg);
        milkBtt13.scale = 0.3;
        milkBtt14 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt14.addImage(milkBottleImg);
        milkBtt14.scale = 0.3;
        milkBtt15 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt15.addImage(milkBottleImg);
        milkBtt15.scale = 0.3;
        milkBtt16 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt16.addImage(milkBottleImg);
        milkBtt16.scale = 0.3;
        milkBtt17 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt17.addImage(milkBottleImg);
        milkBtt17.scale = 0.3;
        milkBtt18 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt18.addImage(milkBottleImg);
        milkBtt18.scale = 0.3;
        milkBtt19 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt19.addImage(milkBottleImg);
        milkBtt19.scale = 0.3;
        milkBtt20 = createSprite(x = x + 40, y+50, 20, 20);
        milkBtt20.addImage(milkBottleImg);
        milkBtt20.scale = 0.3;

    }
}