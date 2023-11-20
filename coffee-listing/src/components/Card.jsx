import '../App.css'
export default function Card(props) {
return(
<div className="card-container">
    <img src={props.image} alt={props.name}/>
    
    <div className='card-name'>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
    </div>
    <h3>{props.rating}</h3>
</div>
)
}