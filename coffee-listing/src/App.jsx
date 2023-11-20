import { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'


function App() {
  const [listing, setListing] = useState([])
  const [availableSelected, setAvailableSelected] = useState(false)
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json").then(
      res => res.json()
      ).then(
        json => setListing(json)
    )}
  , [])

  const handleClick = (button) => {
      if (button === "all") {
        setAvailableSelected(false)
      } else if (button === "available") {
        setAvailableSelected(true)
      }
  }
  
  return (
  <main>
    <header>
    <img className='cafe-bg' src="bg-cafe.jpg" alt="" />
    </header>
    <section>
    <img className='vector' src="vector.svg" alt="" />
    <h1>Our Collection</h1>
    <p>Introducing our Coffee Collection, 
      a selection of unique coffees from different roast types and origins, 
      expertly roasted in small batches and shipped fresh weekly.</p>
      <div className='buttons'>
        <button style={availableSelected? {background:'#1B1D1F'} : {background:'#6F757C'}}
        onClick={() => handleClick('all')}>All Products</button> 
        <button style={availableSelected? {background:'#6F757C'} : {background:'#1B1D1F'}}
        onClick={() => handleClick('available')}>Available now</button>
      </div>
    <div className='listing-container'>
    {
    availableSelected? (
    listing.filter(item => item.available === true).map( item => (
      <Card 
      key={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
      rating={item.rating}
      popular={item.popular}
      votes={item.votes}
      available={item.available}
      />
    ))) : (
      listing.map( item => (
        <Card 
        key={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        rating={item.rating}
        popular={item.popular}
        votes={item.votes}
        available={item.available}
        />
      ))
    )
  }
    </div>
    </section>
  </main>
  )
}

export default App
