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
                className="shadow-sm focus:ring-customRed focus:border-customRed mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="you@example.com"
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
                className="mt-1 focus:ring-customRed focus:border-customRed block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        )
    }
    return(
        <Fragment>
            <div className="mb-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    {props.label}
                </label>
                {element}
            </div>
        </Fragment>
    )
}

export default Input;