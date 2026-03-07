export default function Loading() {
    return (
        <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-linear-to-b from-[#0a0c10] via-[#0d1117] to-[#0a0c10]">
            <div className="relative">
                <div className="h-20 w-20 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin shadow-elegant glow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg animate-pulse">
                    <span className="gradient-text">Y</span>
                </div>
            </div>
        </div>
    );
}
