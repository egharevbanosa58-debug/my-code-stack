export default function ContactDiv({
    icon,
    type,
    typetext,
}) {
    return(
        <div className="flex flex-row items-center">
            <span className="h-8 w-8 text-cyan-500">
                {icon}
            </span>

            <span className="flex flex-col items-center">
                <p className="dark:text-slate-400 text-slate-600">{type}</p>
                <p className="text-white dark:text-black">{typetext}</p>
            </span>
        </div>
    );
}