"use client";

import Link from "next/link";
import { FiAlertTriangle, FiHome, FiRefreshCw } from "react-icons/fi";

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    console.error(error);

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center px-6">
            <div className="max-w-xl w-full text-center">

                {/* Phone */}
                <div className="relative mx-auto w-24 h-44">

                    <div className="w-full h-full rounded-[28px] border-[5px] border-orange bg-white-1 shadow-xl">

                        {/* Speaker */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-divider" />

                        {/* Screen */}
                        <div className="absolute inset-3 rounded-2xl bg-sky-blue flex flex-col items-center justify-center">

                            <FiAlertTriangle
                                size={48}
                                className="text-orange animate-pulse"
                            />

                            <p className="mt-3 text-sm font-semibold text-dark-blue">
                                Loading Failed
                            </p>

                        </div>
                    </div>

                    {/* Pulse Ring */}
                    <div className="absolute -inset-3 rounded-4xl border border-orange/40 animate-ping" />

                </div>

                {/* Heading */}
                <h1 className="mt-10 text-4xl font-bold text-dark-blue">
                    Oops! Something Went Wrong
                </h1>

                <p className="mt-4 text-gray-600 leading-7">
                    We couldn't load the smartphone information right now.
                    This might be a temporary server or network issue.
                </p>

                {/* Info Card */}
                <div className="mt-8 rounded-2xl border border-border bg-white-1 p-5 text-left">

                    <h2 className="font-semibold text-dark-blue">
                        What you can do
                    </h2>

                    <ul className="mt-4 space-y-3 text-gray-600">
                        <li>• Try loading the page again.</li>
                        <li>• Check your internet connection.</li>
                        <li>• Return to the homepage and continue browsing.</li>
                    </ul>

                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-royal-blue px-6 py-3 font-semibold text-white transition hover:bg-dark-blue"
                    >
                        <FiRefreshCw size={18} />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white-1 px-6 py-3 font-semibold text-dark-blue transition hover:bg-sky-blue"
                    >
                        <FiHome size={18} />
                        Go Home
                    </Link>

                </div>

                {/* Footer */}
                <p className="mt-10 text-sm text-gray-500">
                    <span className="font-semibold text-dark-blue">
                        MobileInfo
                    </span>
                    <span className="font-semibold text-emerald">
                        Pro
                    </span>
                    {" • "}
                    Premium Smartphone Specifications
                </p>

            </div>
        </div>
    );
}