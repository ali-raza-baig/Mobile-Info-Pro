import TrendingPhoneCard from '@/components/global/cards/TrendingPhoneCard'
import React from 'react'

const ExploreLatest = ({name}:{name:string}) => {
    return (
        <section className='bg-linear-to-br from-indigo-100 via-sky-50 to-blue-100 overflow-hidden'>

            <div className='container-1 mx-auto py-10 lg:py-18 '>
                <h1 className="text-center text-2xl font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                    Latest {name} Smartphones
                </h1>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 mt-4 md:mt-6'>

                    <div>
                        <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                    </div>
                    <div>
                        <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                    </div>
                    <div>
                        <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                    </div>
                    <div>
                        <TrendingPhoneCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkizTATpTC79Mh9Wp95u5vkaOINHPI8PYEzvrUcJOItg&s' name='Galaxy S22 Ultra plus' price='$ 30000' spec='6GB 128GB' />
                    </div>


                </div>
            </div>

        </section >
    )
}

export default ExploreLatest