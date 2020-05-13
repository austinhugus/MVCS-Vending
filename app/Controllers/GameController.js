import GameService from "../Service/GameService.js"


let _gameService = new GameService()

function _draw() {
    document.getElementById("money").innerHTML = _gameService.TargetMoney;
    document.getElementById("apple").innerText = _gameService.TargetQuantity;
}

export default class GameController {

    constructor() {
        console.log("Hello from GameController");
    }

    cost(costName) {
        _gameService.cost(costName)
        _draw()
    }
    quantity(quantityName) {
        _gameService.quanitity(quantityName)
        _draw()
    }
    reset() {
        _gameService.reset()
        _draw()
    }
}