import SeriesCard from '@/components/global/cards/SeriesCard'
import React from 'react'

const ExploreSeriesSection = () => {
    return (
        <div className="container-1 relative z-10 py-6 md:py-10 px-4 sm:px-6">
            <div>
                <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                    Explore Samsung Series
                </h1>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mt-4 md:mt-6'>
                <div>
                    <SeriesCard link='s-series' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' />
                </div>

                <div>
                    <SeriesCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' />
                </div>

                <div>
                    <SeriesCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' />
                </div>

                <div>
                    <SeriesCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' />
                </div>
            </div>

        </div>
    )
}

export default ExploreSeriesSection