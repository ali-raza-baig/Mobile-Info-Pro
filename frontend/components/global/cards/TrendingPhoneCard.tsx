import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
    image?: string;
    name?: string;
    spec?: string;
    price?: string;
}

const TrendingPhoneCard = ({
    image,
    name,
    spec,
    price,
}: IProps) => {
    return (
        <div
            className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border border-sky-100
      bg-white
      p-4
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-sky-300
      hover:shadow-2xl
      hover:shadow-sky-100
      cursor-pointer
    "
        >
            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-100 blur-3xl transition-all duration-300 group-hover:bg-sky-200" />

            <div className="relative flex flex-col lg:flex-row gap-4">
                {/* Image */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-sky-50 to-sky-100 p-3 transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between">
                    <div>
                        <h3 className="line-clamp-2 text-sm md:text-lg font-extrabold text-gray-900 transition-colors group-hover:text-sky-600">
                            {name}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            {spec}
                        </p>
                    </div>

                    <div className="mt-2 md:mt-4 flex items-center justify-between">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-gray-400">
                                Starting From
                            </span>

                            <h4 className="text-md md:text-xl font-black text-sky-600">
                                {price}
                            </h4>
                        </div>

                        <div
                            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-sky-100
                text-sky-600
                transition-all
                duration-300
                group-hover:bg-sky-600
                group-hover:text-white
                group-hover:rotate-45
              "
                        >
                            <FiArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrendingPhoneCard;