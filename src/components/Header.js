function Header(props) {
    return (
        <article className={"prose lg:prose-xl dark:prose-dark"}>
            <h1 className="text-4xl font-bold text-base items-start mt-5 transition duration-700">
                {props.title}
            </h1>
            <p className={"transition duration-700"}>{props.description}</p>
        </article>
    )
}

export default Header;