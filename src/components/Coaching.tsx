
function Coaching() {
    return (
        <section className="relative w-full h-[60vh] overflow-hidden bg-[#0a0a0a] z-20">
            <img
                alt="Basketball Player"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover"
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent"
                }}
                sizes="100vw"
                srcSet="https://www.withplayvision.ai/_next/image?url=%2FCard%20Photos%2FFooter%20Image.png&w=640&q=75&dpl=dpl_4X1h6hNPZzRSa6ns5hXARVgSh8FQ"
                src="https://www.withplayvision.ai/_next/image?url=%2FCard%20Photos%2FFooter%20Image.png&w=3840&q=75&dpl=dpl_4X1h6hNPZzRSa6ns5hXARVgSh8FQ"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.8)_0%,rgba(10,10,10,0.4)_20%,transparent_40%,transparent_50%,rgba(10,10,10,0.3)_65%,rgba(10,10,10,0.7)_80%,rgba(10,10,10,1)_95%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] from-0% to-transparent to-25%" />
            <div className="relative z-10 h-full flex items-center">
                <div className="w-[98%] max-w-[1600px] mx-auto px-4 md:px-8">
                    <h2 className="text-3xl text-white font-neue-haas mb-6 leading-tight">
                        More time coaching, <br /> less time analyzing.
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-md">
                        Film analysis in minutes, not hours.
                    </p>
                    <div className="flex items-center gap-2 md:gap-4">
                        <button className="px-2 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs text-black bg-white hover:bg-gray-200 transition-colors duration-200 rounded-md uppercase font-mono whitespace-nowrap">
                            Get Started
                        </button>
                        <button className="px-2 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs text-white uppercase bg-white/5 hover:bg-white/10 transition-colors font-mono rounded-md whitespace-nowrap">
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Coaching