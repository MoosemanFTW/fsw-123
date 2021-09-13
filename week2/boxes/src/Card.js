import './Cardstyle.css'

function Card(props){
    return(
    <div className='card' style={{backgroundColor: props.bgcolor}}>
        <h1> {props.title}</h1>
        <h3>{props.subtitle}</h3>
        <h3>{props.description}</h3>
        
    </div>
)};

export default Card

// title, subtitle, description