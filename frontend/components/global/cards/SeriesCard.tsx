import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
    image?: string;
    name?: string;
    link?: string
}

const SeriesCard = ({
    image,
    name,
    link
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
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-sky-50 to-sky-100">
                    <img
                        src={image}
                        alt={name}
                        className="h-[120%] w-[120%] object-contain transition duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between">
                    <div>
                        <h3 className="line-clamp-2 text-sm md:text-lg font-extrabold text-gray-900 transition-colors group-hover:text-sky-600">
                            {name}
                        </h3>
                    </div>

                    <div className="mt-2 md:mt-4">
                        <Link href={`/series/${link}`} className="bg-sky-600 text-white py-2 px-4 rounded-md">Explore </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SeriesCard;