class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = null
        this.height = '600px'
        this.width = '500px'
        this.obstacles = []
        this.score = 0
        this.live = 3
        this.gameIsOver = false
        Game.player = new player(Gameame.gameScreen, 200, 500,100,150, "./images/car.png")
    }
    start(){
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "inheret"
        this.gameLoop()
    }
    gameLoop(){
        if(this.gameIsOver){
            window.cancelAnimationFrame()
        }
        this.update()
        window.requestAnimationFrame(()=>this.gameLoop())
    }
    update(){
        this.player.move()
    }
}