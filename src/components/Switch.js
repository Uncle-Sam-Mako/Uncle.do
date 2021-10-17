


export default function Switch(props) {
    const htmlElt = document.querySelector('html');
    const moon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-500  absolute pointer-events-none h-8 w-8 " viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
    );
    const sun = (
        <svg xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-yellow-500 absolute pointer-events-none h-8 w-8"  viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
    );
    const handleClick = () => {
        htmlElt.classList.toggle('dark');
    }
    const element = htmlElt.className !== "dark" ? moon : sun;
    return (
        <div className="w-10 h-10 bg-gray-200 dark:bg-yellow-100 rounded-lg m-20 relative grid place-items-center shadow-lg"> 
            <input type="checkbox" onClick={() => handleClick()} className="cursor-pointer opacity-0 absolute top-0 left-0 w-full h-full" name="" id=""/>
            {element}
        </div>
    )
}