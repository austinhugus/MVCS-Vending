import GameService from "../Service/GameService.js"


let _gameService = new GameService()

function _draw() {
    document.getElementById("money").innerHTML = _gameService.TargetMoney
}

export default class GameController {

    constructor() {
        console.log("Hello from GameController");
    }

    cost(costName) {
        _gameService.cost(costName)
        _draw()
    }
    reset() {
        _gameService.reset()
        _draw()
    }
}