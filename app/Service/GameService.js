import Target from "../Models/Target.js"

let _target = new Target({ money: 20, cost: { apple: 5, butterfinger: 2, snickers: 2, doritos: 1.50, soda: 1 }, hunger: 100 })


export default class GameService {

    cost(costName) {
        console.log("cost from service", costName)
        _target.money -= _target.cost[costName]
    }

    get TargetMoney() {
        return _target.money
    }

    reset() {
        return _target.money = _target.maxMoney
    }




    constructor() {
        console.log("Hello From Service");
        console.log(_target);

    }
}