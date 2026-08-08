import React from 'react'
import BrandHero from '../section/BrandPage/BrandHero'
import BrandAboutSection from '../section/BrandPage/BrandAboutSection'
import ExploreSeriesSection from '../section/BrandPage/ExploreSeriesSection'
import ExploreLatest from '../section/BrandPage/ExploreLatest'
import BlogSection from '../section/HomePage/BlogSection'
import BrandFaqSection from '../section/BrandPage/BrandFaqSection'
import CollectionSection from '../section/BrandPage/CollectionSection'

const BrandPage = ({ details }: any) => {
    return (
        <div>
            <BrandHero brandHero={details.hero} heroImage={details.heroImage} />
            <BrandAboutSection brandAbout={details.about}/>
            <ExploreSeriesSection id={details._id} name={details.name} />
            <ExploreLatest name={details.name} id={details._id} />
            {/* <CollectionSection name={details.name}/> */}
            {/* <BlogSection /> */}
            <BrandFaqSection brandFaq={details.faqs} name={details.name}/>
        </div>
    )
}

export default BrandPage