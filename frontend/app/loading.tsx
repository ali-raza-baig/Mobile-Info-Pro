export default function Loading() {
    return (
        <div className="min-h-screen bg-bg flex items-center justify-center">
            <div className="flex flex-col items-center">

                {/* Phone */}
                <div className="relative">
                    <div className="w-20 h-40 rounded-[22px] border-[5px] border-royal-blue bg-white-1 shadow-xl animate-pulse">

                        {/* Speaker */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-divider" />

                        {/* Screen */}
                        <div className="absolute inset-3 rounded-xl overflow-hidden bg-sky-blue">
                            <div className="absolute inset-0 bg-linear-to-b from-royal-blue/20 via-transparent to-emerald/20 animate-pulse" />

                            {/* Loading bars */}
                            <div className="absolute bottom-5 left-3 right-3 space-y-2">
                                <div className="h-2 rounded bg-white/70 animate-pulse" />
                                <div className="h-2 w-3/4 rounded bg-white/60 animate-pulse" />
                                <div className="h-2 w-1/2 rounded bg-white/50 animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Animated signal rings */}
                    <span className="absolute inset-0 rounded-3xl border-2 border-royal-blue animate-ping opacity-40" />
                    <span className="absolute inset-0 rounded-3xl border border-emerald animate-pulse opacity-40" />
                </div>

                {/* Logo */}
                <h2 className="mt-8 text-2xl font-bold text-dark-blue">
                    MobileInfo<span className="text-emerald">Pro</span>
                </h2>

                <p className="mt-2 text-gray-500">
                    Loading smartphone specifications...
                </p>

                {/* Progress */}
                <div className="mt-6 w-64 h-2 rounded-full bg-border overflow-hidden">
                    <div className="h-full w-1/2 bg-linear-to-r from-royal-blue via-emerald to-orange animate-[loading_1.5s_ease-in-out_infinite]" />
                </div>

            </div>
        </div>
    );
}