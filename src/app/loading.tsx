export default function Loading() {
    return (
        <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-background">
            <div className="relative">
                <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-secondary animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary font-bold text-xs animate-pulse">
                    YB
                </div>
            </div>
        </div>
    );
}
