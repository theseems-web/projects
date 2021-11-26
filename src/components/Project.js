import React from "react";

export default function Project(props) {
    const children = React.Children.map(props.children, child => {
        return React.isValidElement(child)
            ? React.cloneElement(child, {className: child.props.className + " transition duration-700"})
            : child;
    });

    return (
            <article className="prose dark:prose-dark">
                <h1 className={"transition duration-700"}>{props.title}</h1>
                {children}
            </article>
    )
}