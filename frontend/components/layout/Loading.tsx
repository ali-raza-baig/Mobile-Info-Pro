export default function Loading({ message }: { message?: string }) {
    return (
        <div className=" bg-bg flex items-center justify-center mb-4">
            <div className="flex flex-col items-center">

                {/* Phone */}

                {/* Logo */}
                <h2 className="mt-4 text-2xl font-bold text-dark-blue">
                    MobileInfo<span className="text-emerald">Pro</span>
                </h2>

                <p className="mt-2 text-gray-500">
                    Loading {message} ...
                </p>

                {/* Progress */}
                <div className="mt-6 w-64 h-2 rounded-full bg-border overflow-hidden">
                    <div className="h-full w-1/2 bg-linear-to-r from-royal-blue via-emerald to-orange animate-[loading_1.5s_ease-in-out_infinite]" />
                </div>

            </div>
        </div>
    );
}