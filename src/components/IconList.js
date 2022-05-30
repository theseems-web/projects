import React from "react";

const className = "h-6 w-6 text-blue-500 dark:text-green-500 transition duration-700";

function IconList(props) {
    const children = React.Children.map(props.children, child => {
        return React.isValidElement(child)
            ? React.cloneElement(child, {className: child.className + " " + className})
            : child;
    });

    return (
        <div className="flex flex-wrap align-middle justify-center text-center mx-auto space-x-6 absolute left-10 top-6">
            {children}
        </div>
    )
}

export default IconList;