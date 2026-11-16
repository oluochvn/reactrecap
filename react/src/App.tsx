import { useState } from "react"

function App(){

const [count,setcount] = useState(2);
const[darkMode,setDarkMode] = useState(false)

  const name = "vincent"
  const coding = "react"
  const handleClick = () => {
    alert("clicked")}
    const showName = ()=> {
      alert(`my name is ${name}`)
    }

  return(
    <div className={`p-6 ${ darkMode ? "bg-black text-white":"bg-white text-black" }`}>
        <p>my name is {name}</p>
        <p>i am learning {coding}</p>
        <button className="border mb-4" onClick={handleClick}>click me</button>
        <br />
        <button className="border" onClick={showName} >click name</button>
        <div className="mt-10">
          <p>next</p>
        </div>
        <button onClick={ () => setcount(count + 1)}>click me </button>
        <p>{count}</p>

        <button onClick={ () => setDarkMode(!darkMode)}>chnage mode</button>
    </div>
  )
}
export default App;