import '../App.css'
export default function Card(props) {
return(
<div className="card-container">
    <img className='coffee-img' src={props.image} alt={props.name}/>
    {props.popular && <div className='popular-tag'>Popular</div>}
    <div className='card-name'>
        <h3>{props.name}</h3>
        <h3 className='price'>{props.price}</h3>
    </div>
    {props.rating?
    <div className='rating'>
       <img src="/public/Star_fill.svg" alt="star" /> <h3 className='rating'>{props.rating}</h3>
       <h3 className='votes'>({props.votes} votes)</h3>
    </div>
    :
    <div className='rating'>
        <img src="/public/Star.svg" alt="star" /><h3 className='rating'> No ratings</h3> 
    </div>}
    {!props.available &&  <h3 className='sold-out'>Sold out</h3>}
    

</div>
)
}