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
            <ExploreSeriesSection />
            <ExploreLatest />
            <CollectionSection />
            <BlogSection />
            <BrandFaqSection brandFaq={details.faqs} />
        </div>
    )
}

export default BrandPage