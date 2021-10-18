

export default function Radio(props){
    return(
        <div className="inline-block mx-2">
              <input type="radio" name="color" id={props.colorId} className="hidden peer"/>
              <label title={props.colorId} htmlFor={props.colorId} className="h-6 w-6 rounded-full flex justify-center items-center bg-p-100 ring-2 ring-offset-4 ring-gray-100 ring-offset-white peer-checked:ring-blue-400 peer-checked:bg-blue-500 cursor-pointer transition" style={{"background" : props.color}}></label>
        </div>
    )
}