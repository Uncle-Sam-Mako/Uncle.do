


export default function Switch(props) {
    const htmlElt = document.querySelector('html');
    const light = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current dark:text-yellow-400 transition" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
    )
    const handleClick = () => {
        htmlElt.classList.toggle('dark');
    }
    return (
        <div className="w-10 h-10 bg-gray-200  dark:bg-yellow-100 dark:bg-opacity-30 rounded-lg m-20 relative grid place-items-center shadow-lg"> 
            <input type="checkbox" onClick={() => handleClick()} className="cursor-pointer opacity-0 absolute top-0 left-0 w-full h-full" name="" id=""/>
            {light}
        </div>
    )
}