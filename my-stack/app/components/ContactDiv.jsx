export default function ContactDiv({
    icon,
    type,
    typetext,
}) {
    return(
        <div className="flex flex-row items-center md:w-[70%] gap-3 p-4 border-2 border-slate-400/20 dark:bg-neutral-900/80 rounded-xl hover:transform hover:translate-x-4 hover:shadow-sm hover:shadow-cyan-500/40 transition-all duration-300">
            <span className="h-12 w-12 text-cyan-500 dark:bg-[#162232] bg-[#ebecf0e1] rounded-xl items-center flex text-2xl p-2.5 font-bold">
                {icon}
            </span>

            <span className="flex flex-col items-start md:text-lg">
                <p className="dark:text-slate-400 text-slate-600">{type}</p>
                <p className="text-black dark:text-white">{typetext}</p>
            </span>
        </div>
    );
}