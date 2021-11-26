export default function Tag(props) {
    return (
        <div className={
            "text-xs inline-flex items-center font-bold" +
            " leading-sm uppercase px-3 py-1 rounded-full" +
            " bg-white dark:bg-gray-800 text-gray-700 dark:text-white " +
            "border dark:border-green-700 transition duration-700 "
            + props.className}>
            {() => props.icon ? props.icon : ""}
            {props.name}
        </div>
    )
}