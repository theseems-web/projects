export default function HomepageIcon(props) {
    return (
        <a href={props.href} className={"transition duration-700"}>
            <svg className="h-10 w-10 text-black dark:text-gray-500 transform duration-700" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <polyline points="5 12 3 12 12 3 21 12 19 12"/>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
            </svg>
        </a>
    )
}