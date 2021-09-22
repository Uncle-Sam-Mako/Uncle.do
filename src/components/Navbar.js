import { Fragment } from "react/cjs/react.production.min"

function Navbar(){
    return (
        <Fragment>
            <nav className="py-10 lg:px-10  sm:px-8 flex space-x-3">
                <div className="flex-1 nav-brand ">
                    <span className="lg:text-2xl sm:text-lg">uncle</span>
                    <span className="text-customRed lg:text-5xl sm:text-3xl">.do</span>
                </div>
                <div className="flex-2 menu-icon">
                    <button>
                        <svg className="fill-current text-gray-700 dark:text-gray-50" id="Layer_1" enable-background="new 0 0 512 512" height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
                    </button>
                </div>
            </nav>
        </Fragment>
    )
}
        
export default Navbar;



