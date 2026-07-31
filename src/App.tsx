import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/hooks/useTheme'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { ServicePage } from '@/pages/ServicePage'
import { airconFaqs, hotWaterFaqs, solarFaqs } from '@/data/faqs'
import { images } from '@/data/images'
import { getRouterBasename } from '@/lib/basePath'

export default function App() {
  const basename = getRouterBasename()

  return (
    <ThemeProvider>
      <BrowserRouter basename={basename === '/' ? undefined : basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route
              path="services/air-conditioning"
              element={
                <ServicePage
                  eyebrow="Air Conditioning"
                  title="Stay Comfortable All Year with Energy-Efficient Air Conditioning"
                  intro="An energy-efficient reverse cycle air conditioning system keeps your home cool in summer and warm in winter, all while using energy more efficiently than older systems. It's a smart way to improve your home's comfort, reduce running costs, and enjoy reliable heating and cooling throughout the year."
                  paragraphs={[
                    "The right air conditioning system isn't just about controlling the temperature. It's about creating a home that's comfortable, energy-efficient, and enjoyable in every season.",
                    "At Safe Planet, we make air conditioning installation across Melbourne simple. We'll assess your home, recommend the right solution for your space and budget, and complete the installation with care and professionalism. From your first enquiry to ongoing support, we're here to make the entire process smooth and stress-free.",
                    "Choosing the right air conditioning system can make a noticeable difference to your home's comfort and energy bills. Whether you're replacing an outdated unit or planning a split system installation, we'll help you find a solution that delivers reliable performance and long-term value.",
                    "Every home is different, which is why we don't believe in one-size-fits-all solutions. Our experienced team takes the time to understand your home's layout, lifestyle, and comfort needs before recommending the most suitable split system air conditioning solution. With professional installation and ongoing support, you can enjoy confidence long after the job is complete.",
                  ]}
                  faqs={airconFaqs}
                  product="Aircon"
                  ctaTitle="Stay Comfortable All Year Round"
                  ctaText="Whether you're upgrading an old system or installing air conditioning for the first time, our team is here to help. We'll recommend the right solution for your home, answer your questions, and provide expert advice with no pressure or obligation."
                  heroImage={images.aircon}
                  sideImage={images.airconInstall}
                />
              }
            />
            <Route
              path="services/hot-water"
              element={
                <ServicePage
                  eyebrow="Heat Pump Hot Water System"
                  title="Reliable Hot Water. Lower Energy Bills. Smarter Living."
                  intro="A heat pump hot water system is an energy-efficient way to keep your home supplied with reliable hot water while using less electricity than traditional systems. It's a smart investment that helps lower running costs, improve energy efficiency, and deliver long-term savings."
                  paragraphs={[
                    "A better hot water system isn't just about saving energy. It's about enjoying reliable hot water every day while reducing the cost of running your home.",
                    "At Safe Planet, we make hot water installation across Melbourne simple. We'll help you choose the right electric heat pump hot water system for your home, explain any available government rebates, and complete the installation with care and professionalism. From your first enquiry to ongoing support, we're with you every step of the way.",
                    "A heat pump water heater is designed to do more than just heat your water. It helps reduce your household energy consumption while providing reliable hot water for everyday use. With lower running costs and improved energy efficiency, it's a practical upgrade that delivers long-term value for your home.",
                    "Choosing the right system is just as important as choosing the right installer. At Safe Planet, we take the time to understand your home's hot water needs, recommend the right hot water system installation solution for your household, and install it to the highest standard. We'll also guide you through any eligible government rebates, making the entire process simple from start to finish.",
                  ]}
                  faqs={hotWaterFaqs}
                  product="Hot Water Heat Pump"
                  ctaTitle="Ready to Upgrade Your Hot Water System?"
                  ctaText="Tell us about your home, and we'll help you choose the right heat pump hot water system for your needs. From expert advice and rebate guidance to professional installation, we'll make the entire process simple and stress-free."
                  heroImage={images.hotWater}
                  sideImage={images.living}
                />
              }
            />
            <Route
              path="services/solar-batteries"
              element={
                <ServicePage
                  eyebrow="Solar Batteries Installation"
                  title="Store More Solar Energy. Gain More Control Over Your Power."
                  intro="A solar battery stores the excess energy your solar panels generate during the day, so you can use it when the sun isn't shining. Instead of sending unused electricity back to the grid, you can power your home in the evening, reduce your reliance on the grid, and make better use of the energy you already generate."
                  paragraphs={[
                    "A solar battery isn't just about storing energy. It's about making the most of your solar investment while giving you greater control over how and when you use your power.",
                    "At Safe Planet, we make choosing a solar battery simple. We'll assess your home's energy usage, recommend a battery that suits your needs, explain any available government incentives, and complete the installation with care and professionalism. From expert advice to ongoing support, we're with you every step of the way.",
                    "Adding a solar battery helps you use more of the clean energy your home generates instead of relying on electricity from the grid. Whether you're looking to lower your electricity bills, increase your energy independence, or prepare for the future, a battery is a smart long-term investment.",
                    "Every home uses energy differently, which is why there's no one-size-fits-all solution. Our team takes the time to understand your home's energy needs before recommending the right battery system. With professional installation and ongoing support, you can enjoy greater confidence in your home's energy future.",
                  ]}
                  faqs={solarFaqs}
                  product="Solar Batteries"
                  ctaTitle="Let's Find the Right Solar Battery Solution for Your Home"
                  ctaText="Whether you're adding a battery to your existing solar system or planning a complete home energy upgrade, we're here to help. Tell us about your home, and our team will recommend the right battery solution to help you store more energy, reduce your reliance on the grid, and get the most from your solar investment."
                  heroImage={images.solar}
                  sideImage={images.family}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
