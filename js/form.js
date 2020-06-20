class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h2');

    }
    if(gameState=1){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
      }
    display() {
        var title = createElement('h2');
        title.html("Let's Paint");
        title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello" + player.name + "Welcome to Let's Paint");
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }
}