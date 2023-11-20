import { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'


function App() {
  const [listing, setListing] = useState([])
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json").then(
      res => res.json()
      ).then(
        json => setListing(json)
    )}
  , [])

  
  return (
  <main>
    <section>
    <h1>Our Collection</h1>
    <p>Introducing our Coffee Collection, 
      a selection of unique coffees from different roast types and origins, 
      expertly roasted in small batches and shipped fresh weekly.</p>
      <div className='buttons'>
        <button>All Products</button> 
        <button>Available now</button>
      </div>
    <div className='listing-container'>
    {listing.map( item => (
      <Card 
      key={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
      rating={item.rating}
      popular={item.popular}
      />
    ))}
    </div>
    </section>
  </main>
  )
}

export default App
