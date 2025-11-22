import Coaching from "./components/Coaching"
import Footer from "./components/Footer"
import Navbar, { Navbar2 } from "./components/Navbar"
import Pricing from "./components/Pricing"
import Services from "./components/Services"
import Video from "./components/Video"

function App() {
  return (
    <div className="bg-[#111112] overflow-x-hidden scroll-smooth relative">
      <Video />
      <Navbar />

      <main className="relative pt-24 z-10">
        <Navbar2 />
        <section className="min-h-[85vh] flex items-end pb-12">
          <div className="w-[98%] max-w-[1600px] mx-auto">
            <div
              className="transition-opacity duration-300 px-4"
              style={{ opacity: "0.584" }}
            >
              <p className="text-xs text-gray-200 mb-4 flex items-center gap-2">
                <span>Backed by</span>
                <span className="bg-white text-black font-bold text-[10px] w-4 h-4 flex items-center justify-center rounded-sm">
                  Y
                </span>
                <span>Combinator</span>
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-6 max-w-3xl font-neue-haas">
                AI-Driven Basketball <br />
                Analytics Platform
              </h1>
              <p className="text-base text-gray-300 leading-relaxed max-w-sm md:max-w-lg">
                AI and Computer Vision to automatically produce advanced analytics,
                saving time and providing sports teams with a competitive edge.
              </p>
            </div>
            <div
              className="mt-8 transition-opacity duration-300"
              style={{ opacity: 1 }}
            >
              <div className="jsx-ba1c3852746fdf01 relative overflow-hidden max-w-lg">
                <div className="jsx-ba1c3852746fdf01 marquee-wrapper">
                  <div className="jsx-ba1c3852746fdf01 marquee-container">
                    <div className="jsx-ba1c3852746fdf01 flex items-center space-x-12 px-6">
                      <img
                        alt="ACC"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/ACC.svg"
                      />
                      <img
                        alt="BIG 10"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/BIG 10.svg"
                      />
                      <img
                        alt="BIG 12"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/BIG 12.svg"
                      />
                      <img
                        alt="C USA"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/C USA.svg"
                      />
                      <img
                        alt="SEC"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/SEC.svg"
                      />
                      <img
                        alt="WCC"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/WCC.svg"
                      />
                    </div>
                    <div className="jsx-ba1c3852746fdf01 flex items-center space-x-12 px-6">
                      <img
                        alt="ACC"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/ACC.svg"
                      />
                      <img
                        alt="BIG 10"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/BIG 10.svg"
                      />
                      <img
                        alt="BIG 12"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/BIG 12.svg"
                      />
                      <img
                        alt="C USA"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/C USA.svg"
                      />
                      <img
                        alt="SEC"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/SEC.svg"
                      />
                      <img
                        alt="WCC"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: "transparent" }}
                        src="https://www.withplayvision.ai/Customer Logos/WCC.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="h-screen bg-black flex items-center justify-center pointer-events-none"
          style={{ opacity: 1 }}
        >
          <p className="text-sm text-white font-mono">"AI MONEY BALL"</p>
        </div>

      </main>
      {/* <Datapoints /> */}
      <Services />
      <Pricing />
      <Coaching />
      <Footer />
    </div>
  )
}

export default App