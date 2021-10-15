
const Button = function(props){
    return(
        <button onClick={props.onClick} className="btn-red my-5 text-sm">{props.children}</button>
    )
}

export default Button;