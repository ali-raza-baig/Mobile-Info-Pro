'use client'
import React, { useState } from 'react';
import brands from '@/public/constant/brands';
import Link from 'next/link';

const BrandsSection = () => {
    const [visibleCount, setVisibleCount] = useState(6); // Start with 6 on mobile

    // Determine how many to show based on screen size
    // Using window.innerWidth in useEffect for proper SSR handling
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update visible count when screen size changes
    React.useEffect(() => {
        if (isLargeScreen) {
            setVisibleCount(16);
        } else {
            setVisibleCount(6);
        }
    }, [isLargeScreen]);

    const loadMore = () => {
        if (isLargeScreen) {
            setVisibleCount(prev => Math.min(prev + 8, brands.length));
        } else {
            setVisibleCount(prev => Math.min(prev + 6, brands.length));
        }
    };

    const visibleBrands = brands.slice(0, visibleCount);
    const hasMore = visibleCount < brands.length;

    return (
        <section className='overflow-hidden bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100'>
            <div className='container-1 mx-auto py-10 lg:py-18 min-w-20 max-w-20'>
                <div className='max-w-3xl mx-auto text-center'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight'>
                        Browse by Your{' '}
                        <span className='bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                            Favorite
                        </span>{' '}
                        Brand
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-6 px-3'>
                        Explore smartphones from the world's leading manufacturers.
                    </p>
                </div>

                <div className='flex items-center justify-center flex-wrap gap-4 mt-4 md:mt-6'>
                    {visibleBrands.map((b) => (
                        <Link href={`/brand/${b.slug}`}
                            key={b.id}
                            className='rounded-md bg-white-1 p-2 transition-all duration-200 hover:-translate-y-1.5 flex flex-col items-center justify-center gap-1 shrink-0'
                        >
                            <img
                                src={b.img}
                                title={b.metaTitle}
                                loading='lazy'
                                alt={b.alt}
                                className='w-30 h-30'
                            />
                            <span className='text-sm md:text-base font-black'>{b.brandName}</span>
                        </Link>
                    ))}
                </div>

                {hasMore && (
                    <div className='flex items-center justify-center mt-4 md:mt-6'>
                        <button
                            onClick={loadMore}
                            className='px-4 py-2 rounded-md bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600 text-white hover:opacity-90 transition-opacity'
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BrandsSection;