export default function Footer() {
    return (
        <div className="border-t border-slate-500">
            <div className="flex w-full justify-between p-8">
                <span className="flex flex-col gap-1">
                    <h3 className="dark:text-slate-400 text-slate-600 font-semibold">QUICK LINKS</h3>
                    <a href="#first" className="dark:text-slate-400 text-slate-600 hover:underline">Home</a>
                    <a href="#skills" className="dark:text-slate-400 text-slate-600 hover:underline">Skills</a>
                    <a href="#project" className="dark:text-slate-400 text-slate-600 hover:underline">Projects</a>
                    <a href="#about" className="dark:text-slate-400 text-slate-600 hover:underline">About</a>
                    <a href="#contact" className="dark:text-slate-400 text-slate-600 hover:underline">Contact</a>
                </span>

                <p className="dark:text-slate-400 text-slate-600">Made by NOSA&trade;</p>
                <a href="https://www.github.com/egharevbanosa58-debug" className="dark:text-slate-400 text-slate-600 underline">egharevbanosa58-debug</a>
            </div>

            <p className="dark:text-slate-400 text-slate-600 text-center">&copy; 2026 All Rights Reserved</p>
        </div>
    );
}