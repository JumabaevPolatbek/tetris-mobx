import React from 'react';
import { observer } from 'mobx-react-lite';
import store from './store';

const App = observer(() => {
  console.log(store.storePlayField)
  console.log(store.getRandomFigure())
  // console.log(store.storePlayField)
  document.addEventListener('keyup',(event)=>setTimeout(()=>store.movingFigure(event),0))
  return (

    <div className='App'>
      {store.storePlayField.map((item) => {
        return item.map((number,index) => {
           return number===1?(<span key={index} className='active'></span>):(<span key={index}></span>)
        })
      })}
    </div>
  )
})

export default App;
