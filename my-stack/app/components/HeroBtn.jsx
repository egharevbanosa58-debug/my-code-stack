export default function HeroBtn(
    {
        text,
        darkText,
        lightText,
        bgGradient,
        darkBgColor,
        lightBgColor,
        width,
        extra,
    }
) {
    return (
        <>
            <button
                className={`${lightText} ${darkText} ${bgGradient} ${darkBgColor} ${lightBgColor} ${width} rounded-r-full rounded-l-full border border-slate-400/20 px-4 py-3 cursor-pointer ${extra}`}
            >
                {text}
            </button>
        </>
    );
}