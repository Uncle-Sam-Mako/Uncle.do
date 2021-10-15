

export default function Radio(props){
    return(
        <div className="radio my-3 mr-3">
            <input type="radio" style={{background : props.color}} />
        </div>
    )
}