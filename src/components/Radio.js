
function handleChange(e){
    console.log(e.target.id)
}

export default function Radio(props){
    return(
        <div className="inline-block mx-2">
              <input type="radio" onChange={handleChange} name="color" id={props.colorId} className="peer sr-only hidden"/>
              <label title={props.colorId} htmlFor={props.colorId} className={'h-6 w-6 rounded-full flex justify-center items-center ring-2 ring-offset-4 ring-gray-100 ring-offset-white dark:ring-gray-500 dark:ring-offset-gray-800 peer-checked:ring-blue-500 cursor-pointer transition bg-gray-200'}></label>
        </div>
    )
}