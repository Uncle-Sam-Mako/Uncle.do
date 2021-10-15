
export function Todo(props){
    return(
        <div className="todo bg-gray-50 dark:bg-gray-800 rounded-lg m-3 overflow-hidden shadow-md" style={{display : "grid", gridTemplateColumns : "50px 1fr"}}>
            <div className="checkbox h-full py-3" style={{background : props.color}}>
                <input className="" type="checkbox" name="" id="" />
            </div>
            <div className="px-5 py-2">
                <p className="font-bold">{props.title}</p>
                <p className="text-sm text-gray-500">{props.description}</p>
            </div>
        </div>
    )
}