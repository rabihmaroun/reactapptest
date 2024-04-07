import './game.css';

interface GameProps {
    logo: string;
    name:string;
    isActive?:boolean;
}

function game(props : GameProps){
  return (
    <div className={`game ${props.isActive ? 'active' : ''}`}>
        <img src={props.logo} alt={props.name}  />
        <p className='my-0 regular-font'>{props.name}</p>
    </div>
  )
}

export default game