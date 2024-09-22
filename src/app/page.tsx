import { Footer } from "@/components/footer"
import Header from "@/components/header"
import { SectionContact } from "@/components/homepage-contact"
import { SectionCTA } from "@/components/homepage-cta"
import { SectionFeature } from "@/components/homepage-features"
import { SectionHero } from "@/components/homepage-hero"
import { SectionTestimonial } from "@/components/homepage-testimonial"

export default function Home() {
  return (
    <>
    <Header />
    <SectionHero />
    <SectionFeature />
    <SectionCTA />
    <SectionTestimonial />
    <SectionContact />
    <Footer />
    </>
  )
}