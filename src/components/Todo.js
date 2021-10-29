
export default function Todo(props){
    return(
        <div className="todo bg-gray-50 dark:bg-gray-800 rounded-lg m-3 overflow-hidden shadow-md" style={{display : "grid", gridTemplateColumns : "50px 1fr 50px"}}>
            <div className="checkbox h-full py-3" style={{background : props.color}}>
                <input className="" type="checkbox" name="" id="" />
            </div>
            <div className="px-5 py-2">
                <p className="font-bold">{props.title}</p>
                <p className="text-sm text-gray-500">{props.description}</p>
            </div>
            <div className="flex">
                <button className="removeTodo m-auto w-10 h-10 rounded-full bg-gray-300 bg-opacity-0 hover:bg-opacity-10" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}