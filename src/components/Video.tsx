
function Video() {
    return (
        <div
            className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden"
            style={{
                opacity: 1,
                willChange: "opacity",
                transition: "opacity 0.3s ease-out",
                transform: "translateZ(0px)",
                backfaceVisibility: "hidden"
            }}
        >
            <video
                className="md:hidden absolute top-0 left-0 w-full h-full object-cover"
                style={{
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                }}
                src="https://www.withplayvision.ai/Hero Videos/Play Vision Thermal Vertical.mp4"
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
            />
            <video
                className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
                style={{
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                }}
                src="https://www.withplayvision.ai/Hero Videos/Play Vision Thermal Horizontal.mp4"
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111112]/50 via-[#111112]/30 to-[#111112]" />
        </div>
    )
}

export default Video