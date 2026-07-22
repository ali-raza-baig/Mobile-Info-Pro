import Link from "next/link";
import { FiSearch, FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-bg flex items-center justify-center px-6">
            <div className="max-w-xl w-full text-center">
                {/* Phone */}

                {/* Content */}
                <h1 className="mt-5 text-4xl font-bold text-dark-blue">
                    Mobile Not Found
                </h1>

                <p className="mt-4 text-gray-600 leading-7">
                    Sorry, we couldn't find the smartphone you're looking for. It may
                    have been removed, renamed, or the URL is incorrect.
                </p>

                {/* Suggestions */}
                <div className="mt-8 rounded-2xl border border-border bg-white-1 p-5 text-left">
                    <h2 className="font-semibold text-dark-blue">
                        You can try:
                    </h2>

                    <ul className="mt-4 space-y-3 text-gray-600">
                        <li>• Check the spelling of the brand or model name.</li>
                        <li>• Search for another smartphone.</li>
                        <li>• Browse the latest mobile phones.</li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-royal-blue px-6 py-3 font-semibold text-white transition hover:bg-dark-blue"
                    >
                        <FiHome size={18} />
                        Go Home
                    </Link>

                    <Link
                        href="/mobiles"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white-1 px-6 py-3 font-semibold text-dark-blue transition hover:bg-sky-blue"
                    >
                        <FiArrowLeft size={18} />
                        Browse Mobiles
                    </Link>
                </div>

                {/* Brand */}
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