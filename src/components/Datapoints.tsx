
function Datapoints() {
    return (
        <div className="relative min-h-[80vh] md:min-h-screen bg-white overflow-hidden pt-4 md:pt-32 z-20">

            <div className="flex flex-row items-center justify-between w-full gap-12 pb-12">

                <div className="max-w-xl flex-shrink-0">
                    <h1 className="text-4xl leading-tight text-black mb-3 max-w-3xl font-neue-haas">
                        1 Million Data Points
                    </h1>
                    <p className="text-base text-gray-600 leading-relaxed max-w-md mb-8">
                        Like having a thousand scouts watching every inch of the court. Over 1
                        million data points per game reveal insights invisible to the human eye.
                    </p>
                </div>

                <div className="relative w-[1200px] h-[685px] flex-shrink-0 -mr-24 rounded-2xl overflow-hidden">
                    <video src="https://stream.mux.com/xJ5bNVBGVfo1IZWV02nTc800iOdB5iYYto5m9yTnKgF01Y.m3u8?redundant_streams=true" muted autoPlay></video>
                </div>
            </div>
        </div>
    )
}

export default Datapoints