
function Navbar() {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(98%-4rem)] max-w-[calc(1600px-4rem)] bg-gray-600/60 backdrop-blur-3xl rounded-lg z-50 transition-transform duration-300 outline-none -translate-y-[calc(100%+2rem)]">
            <nav className="w-full mx-auto flex justify-between items-center px-4 md:px-8 py-4 outline-none">
                <div className="flex items-center gap-3">
                    <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={6} cy={6} r={6} fill="white" />
                    </svg>
                    <div className="text-sm font-bold text-white uppercase">PLAYVISION</div>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <button className="px-4 py-2 text-xs text-white uppercase bg-white/5 hover:bg-white/10 transition-colors font-mono rounded-md">
                        Features
                    </button>
                    <button className="px-4 py-2 text-xs text-white uppercase bg-white/5 hover:bg-white/10 transition-colors font-mono rounded-md">
                        Services
                    </button>
                    <button className="px-4 py-2 text-xs text-white uppercase bg-white/5 hover:bg-white/10 transition-colors font-mono rounded-md">
                        Pricing
                    </button>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="px-2 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs text-white uppercase bg-white/5 hover:bg-white/10 transition-colors font-mono rounded-md whitespace-nowrap">
                        Log In
                    </button>
                    <button className="px-2 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs text-black bg-white hover:bg-gray-200 transition-colors duration-200 rounded-md uppercase font-mono whitespace-nowrap">
                        Get Started
                    </button>
                </div>
            </nav>
        </header>

    )
}


export function Navbar2() {
    return <div
        className="fixed top-8 left-0 w-full z-40 transition-opacity duration-300"
        style={{ opacity: 1 }}
    >
        <div className="w-[98%] max-w-[1600px] mx-auto">
            <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2 md:gap-3">
                    <svg
                        className="w-3 h-3 md:w-4 md:h-4"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx={6} cy={6} r={6} fill="white" />
                    </svg>
                    <div className="text-sm md:text-xl font-bold text-white uppercase">
                        PLAYVISION
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="px-2 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs text-white uppercase bg-white/5 hover:bg-white/10 transition-colors font-mono rounded-md whitespace-nowrap">
                        Log In
                    </button>
                    <button className="px-2 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs text-black bg-white hover:bg-gray-200 transition-colors duration-200 rounded-md uppercase font-mono whitespace-nowrap">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>

}
export default Navbar