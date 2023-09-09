import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// my files
import Actor from './Actor'
import Singer from './Singer'
import Counter from './Counter'
import Users from './Users'

function App() {
  //part 2
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button2 clicked');
  }
  const googleMarks = (google) =>{
    alert(google + 5);
  }


  const actors = ['Khan', 'Kapur', 'Bochon'];
  const singers = [
    {id: 1, name: 'singer 1', age: 50},
    {id: 2, name: 'singer 2', age: 60},
    {id: 3, name: 'singer 3', age: 40},

  ];
  return (
    <>
    {
      singers.map(singer => <Singer singer = {singer}></Singer>)
    }
      <Actor name={'Ranit Sarker'}></Actor>
      {
        actors.map(actor => <Actor name = {actor}></Actor>)
      }

      {/* part 2 */}
      {/* event handler */}
  <button onClick={handleClick}>Click Me</button>
  <button onClick={handleClick2}>Click Me2</button>
  <button onClick={() =>{alert('clicked button3')}}>Click Me3</button>
  {/* if props enter  */}
  <button onClick={() => googleMarks(3)}>click me4</button>
  <Counter></Counter>
  <Users></Users>
 
    </>
  )
}

export default App
