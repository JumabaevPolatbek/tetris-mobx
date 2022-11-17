import { data, arr } from "./data";
import { makeAutoObservable} from "mobx";


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
                    this.storePlayField[0+y][rndNum+x]=arr[rndNum][y][x]
                }
            }
        }

    }
    movingFigure(event:KeyboardEvent){

        if(event.code==='ArrowDown') {
            for (let y = this.storePlayField.length-1; y >=0; y--) {
                for (let x = 0; x < this.storePlayField[y].length; x++) {
                    if(this.storePlayField[y][x]===1){
                        setTimeout(()=>{
                            this.storePlayField[y+1][x]=1
                            this.storePlayField[y][x]=0
                        },0)
                    }
                }
            }
        }
    }
    // keyDownPress(event){
    //     switch (event.code)
    // }
}


export default new Store()
