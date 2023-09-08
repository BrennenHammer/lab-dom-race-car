window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = new Game()
  startButton.addEventListener("click", function () {
    startGame();
    
  });

  function startGame() {
      console.log("start game");
      game = new Game()
      game.start()
      
      document.addEventListener('keydown', (e)=>{
      if(e.key === "ArrowUp"){
        game.player.directionY -= 1
      }
      if(e.key === "ArrowDown"){
        game.player.directionY += 1
      }
      if (e.key === "ArrowLeft"){
        game.player.directionX -= -1
      }
      if(e.key === "ArrowRight"){
        game.player.directionX = 1
      }
    })
  }
};
