import Link from "next/link";
import React from "react";
import { IoHardwareChipOutline } from "react-icons/io5";
import { LuMicrochip } from "react-icons/lu";
import { MdOutlineBattery1Bar } from "react-icons/md";

interface IProps {
    badge?: string;
    image: string;
    imgAlt?: string;
    name: string;
    price: string;
    compare?: string;
    link?: string
    chip?: string
    battery?: string
}

const PhoneCard = ({
    badge,
    image,
    imgAlt,
    name,
    price,
    compare,
    link,
    chip,
    battery
}: IProps) => {
    return (
        <Link href={link ? link : ''} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
            {/* Badge */}
            {badge && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-dark-blue px-3 py-1 text-xs font-semibold text-white">
                    {badge}
                </span>
            )}

            {/* Image */}
            <div className="flex h-56 items-center justify-center bg-slate-50 p-5">
                <img
                    src={image}
                    alt={imgAlt}
                    className="max-h-full w-auto object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                {/* Name + Price */}
                <div className="flex items-start justify-between gap-3">
                    <h3 className="line-clamp-2 text-lg font-bold leading-6 text-slate-900">
                        {name}
                    </h3>

                    <div className="text-right shrink-0">
                        <p className="text-xl font-extrabold text-dark-blue">
                            ${price}
                        </p>
                        <span className="text-xs text-slate-500">Estimated</span>
                    </div>
                </div>

                {/* Specs */}
                <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                        <LuMicrochip className="text-lg text-dark-blue" />
                        <span className="truncate">{chip}</span>
                    </div>

                    {/* <div className="flex items-center gap-2">
                        <IoHardwareChipOutline className="text-lg text-dark-blue" />
                        <span>8GB / 256GB</span>
                    </div> */}

                    <div className="flex items-center gap-2">
                        <MdOutlineBattery1Bar className="text-lg text-dark-blue" />
                        <span>{battery} mAh</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-2">
                    {compare && (
                        <button className="rounded-xl border border-dark-blue px-4 py-2 font-medium text-dark-blue transition-colors hover:bg-dark-blue hover:text-white">
                            {compare}
                        </button>
                    )}

                    <Link href={link ? link : ''}
                        className={`rounded-xl bg-dark-emerald px-4 py-2 font-medium text-white transition-colors hover:opacity-95 ${compare ? "flex-1" : "w-full"
                            }`}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default PhoneCard;