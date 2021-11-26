import React from "react";

const className = "h-6 w-6 text-blue-500 dark:text-green-500 transition duration-700";

/**
 * <CvIcon href={"//theseems.ru/cv"} className={className}/>
 <GithubIcon href={"//theseems.ru/github"} className={className}/>
 <TelegramIcon href={"//theseems.ru/telegram"} className={className}/>
 <MailIcon href={"mailto:me@theseems.ru"} className={className}/>
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

function IconList(props) {
    const children = React.Children.map(props.children, child => {
        return React.isValidElement(child)
            ? React.cloneElement(child, {className: child.className + " " + className})
            : child;
    });

    return (
        <div className="flex flex-wrap align-middle justify-center text-center mx-auto space-x-6">
            {children}
        </div>
    )
}

export default IconList;