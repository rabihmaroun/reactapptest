import './button.css';

interface buttonPros{
    text:string;
    onClickFunction: () => void;
}

function button(props: buttonPros) {
  return (
    <button onClick={props.onClickFunction} >{props.text}</button>
  )
}

export default button