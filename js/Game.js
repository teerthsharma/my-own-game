class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
// earth = car1
    earth = createSprite(150,400);
    earth.addImage("earth",earth1_img);
    //car2=piston star
    piston= createSprite(600,200);
    piston.addImage("piston",piston1_img);
    piston.scale=.75
    //car3=arrow
    arrow = createSprite(1000,200);
    arrow.addImage("arrow",arrow1_img);
    arrow.scale=0.75
    //car4 = sun
    sun = createSprite(150,200);
     sun.addImage("sun",sun1_img);
     //car5 = jupiter
     jupiter=createSprite(600,500)
     jupiter.addImage("jupiter",jupiter1_img)
     jupiter.scale=0.45
     cars = [earth, piston, arrow,sun,jupiter];
  }

  play(){
    form.hide();
    background("black")
    this.title=createElement('h2')
    
    this.title.html("galaxy",); 
    
    this.title.position(displayWidth/2 - 50, 0);
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      // background(rgb(198,135,103));
      // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
       var x = 0 ;
       var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        //x = x + 200;
        //use data form the database to display the cars in y direction
        // y = displayHeight - allPlayers[plr].distance;
        // cars[index-1].x = x;
        // cars[index-1].y = y;
        
       // console.log(index, player.index)

       
        // if (index === player.index){
        //   stroke(10);
        //   fill("red");
        //   ellipse(x,y,60,60);
        //   cars[index - 1].shapeColor = "red";
        //   camera.position.x = displayWidth/2;
        //   camera.position.y = cars[index-1].y;
        // }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    // if(keyIsDown(UP_ARROW) && player.index !== null){
    //   player.distance +=10
    //   player.update();
    // }
// http://keycode.info/ 
    if(keyCode===83){
      window.location.href = "sun.html";
    }
    if(keyCode===69){
      window.location.href = "EARTH.html";
    }
   if(keyCode===74){
    window.location.href = "jupiter.html";
   }
   if(keyCode===84){
    window.location.href = "timearrow.html";
   }
   if(keyCode===80){
    window.location.href = "pistonstar.html";
   }

    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
  
}
