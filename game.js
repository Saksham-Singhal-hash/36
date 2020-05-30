class game{

    constructor(){

    }
    getstate(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
start(){
    if (gameState===0){
        player=new player ();
        player.getcount();
        form=new form();
        form.display();
    }
}
}