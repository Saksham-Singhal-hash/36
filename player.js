class player{
    constructor(){

    }
    getcount(){
     var playercountref=database.ref("playerCount")
     playercountref.on("value",function(data){
        playerCount=data.val();
    })
    }
    updatecount(count){
        database.ref("/").update({
            playerCount:count
                })
    }
    update(name){
        var playerindex="player"+playerCount;
        database.ref(playerindex).set({
            name:name
        })
    }
}