import BlogSection from '@/components/section/HomePage/BlogSection'
import BrandsSection from '@/components/section/HomePage/BrandsSection'
import HomeHero from '@/components/section/HomePage/HomeHero'
import NewReleasedSection from '@/components/section/HomePage/NewReleasedSection'
import TopRatedSection from '@/components/section/HomePage/TopRatedSection'
import TrandingPhoneSection from '@/components/section/HomePage/TrandingPhoneSection'
import TrustSection from '@/components/section/HomePage/TrustSection'

const page = () => {
  return (
    <div>
      <HomeHero />
      <TrustSection />
      <BrandsSection />
      <TrandingPhoneSection />
      <NewReleasedSection />
      <TopRatedSection />
      {/* <BlogSection /> */}
    </div>
  )
}

export default page