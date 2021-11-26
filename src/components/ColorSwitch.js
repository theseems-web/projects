import {useState} from "react";

function toggleColorMode() {
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme === 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
    }
}

function ColorSwitch() {
    const [toggle, setToggle] = useState(localStorage.theme === 'dark');
    let onClick = () => {
        setToggle(!toggle);
        toggleColorMode()
    }

    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg"
             className="h-10 w-10 absolute text-black dark:text-gray-500 transform duration-700"
             style={{top: '4vh', 'left': '3vw'}} fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={toggle
                      ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343" +
                      " 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}/>
        </svg>
    )
}

export default ColorSwitch;
