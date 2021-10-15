import { Fragment } from "react/cjs/react.production.min"


const Input = function(props){
    const type = props.type;
    let element = null;
    if(type === "textarea"){
        element = (
            <textarea
                id="about"
                name="about"
                rows={3}
                className="shadow focus:ring-0 focus:shadow-md  mt-1 block w-full sm:text-sm border rounded-md dark:bg-gray-600"
                placeholder="Parlez de votre tâche"
                defaultValue={''}
            />
        )
    }else{
        element = (
            <input
                type={props.type}
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-0 focus:shadow-md block w-full shadow sm:text-sm rounded-md dark:bg-gray-600"
            />
        )
    }
    return(
        <Fragment>
            <div className="mb-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-500">
                    {props.label}
                </label>
                {element}
            </div>
        </Fragment>
    )
}

export default Input;