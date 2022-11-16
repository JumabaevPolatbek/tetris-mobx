import { data, arr } from "./data";
import { makeAutoObservable } from "mobx";


class Store{
    storePlayField = data
    constructor() {
        makeAutoObservable(this)
    }
    getRandomFigure() {
        let rndNum = Math.floor(Math.random() * 7)
        console.log(arr[rndNum])
        for (let y = 0; y < arr[rndNum].length; y++) {
            for (let x = 0; x < arr[rndNum][y].length; x++){
                if (arr[rndNum][y][x]===1) {
                    this.storePlayField[0+y][0+x]=arr[rndNum][y][x]
                }
            }
        }
        console.log(rndNum)
    }
}


export default new Store()