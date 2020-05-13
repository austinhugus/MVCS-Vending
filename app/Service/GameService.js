import Target from "../Models/Target.js"

let _target = new Target({ money: 20, cost: { apple: 5, butterfinger: 2, snickers: 2, doritos: 1.50, soda: 1 }, hunger: 100, quantity: { apple: 5, butterfinger: 6, snickers: 4, doritos: 3, soda: 9 } })


export default class GameService {

    cost(costName) {
        console.log("cost from service", costName)
        _target.money -= _target.cost[costName]
    }
    quanitity(quantityName) {
        console.log("quantity from service", quantityName)
        _target.quantity -= _target.quantity[quantityName]
    }

    get TargetMoney() {
        return _target.money
    }
    get TargetQuantity() {
        return _target.quantity
    }

    reset() {
        return _target.money = _target.maxMoney
        return _target.quantity = _target.maxQuantity
    }




    constructor() {
        console.log("Hello From Service");
        console.log(_target);

    }
}