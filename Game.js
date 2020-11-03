class Game{
    constructor(){

    }
     getState(){
var getStateRef=dataBase.ref('getState')
getStateRef.on("value",(data)=>{
    gameState=data.val();
})
    }
    update(state){
dataBase.ref('/').update({
    gameState:state
})
    }
    start(){
      if(gameState===0) {
          player=new Player();
          player.getCount();
          
          form=new Form();
          form.display();


      }
    }
    play(){
        form.hide()
        textSize(30)
        text("game starts",200,50)
        Player.getPlayerInfo()
        if(allPlayers!=undefined){
            var displayPosition=130
            for(var i in allPlayers){
                if(i==="player"+player.index)
                fill("red")
                else
                fill("black")

                displayPosition+=20
                textSize(15)

                text(allPlayers[i].name+":"+allPlayers[i].distance,100,displayPosition)

            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=50
        player.update()
        }
    }
    }
