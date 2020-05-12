import GameController from "../app/Controllers/GameController.js"

class App {
    constructor() {
        console.log("Hello from app")
        this.gameController = new GameController()
    }
}

window["app"] = new App()