import { useEffect, useState } from 'react'
import './App.css'
import SearchId from "./components/SearchId"
import Brands from "./components/Brands"
import Categories from "./components/Categories"
import Photos from "./components/Photos"

function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState()
  const [activePage, setActivePage] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setData(data.products))     
  },[])

  const handleButtonClick = (componentName) => {
    if (activePage.includes(componentName)) {
      setActivePage(prevActivePage => prevActivePage.filter(component => component !== componentName))
    } else {
      setActivePage(prevActivePage => [...prevActivePage, componentName])
    }
  }

  const handleInput = (e) => {
    e.preventDefault()
    setInput(e.target.elements.id.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleInput}>
        <label htmlFor="id">Input item id</label>
        <br />
        <input type="text" id="id"/>
        <input type="submit" />
        <br /><br /><br />
      </form>

      <button onClick={() => handleButtonClick("brands")}>Brands</button>
      <button onClick={() => handleButtonClick("categories")}>Categories</button>
      <button onClick={() => handleButtonClick("photos")}>Photos</button>  

      {activePage.includes("brands") && <Brands data={data} activePage={activePage}/>}
      {activePage.includes("categories") && <Categories data={data} activePage={activePage} />}
      {activePage.includes("photos") && <Photos data={data} activePage={activePage}/>}

      {input && <SearchId data ={data} id={input} setInput={setInput} />}
    </div>
  )
}

export default App