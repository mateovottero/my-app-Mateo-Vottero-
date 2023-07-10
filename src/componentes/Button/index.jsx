import './index.css';




function Button (props) {
    return(
        <div className='button' style={{background: props.color}}>
            {props.valor}
        </div>
    )
}
export default Button