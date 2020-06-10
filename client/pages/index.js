import { Fragment } from 'react';
import HeroSection from '../components/hero/heroSection';
import LandingGallery from '../components/gallery/landingGallery';
import Featured from '../components/featuerd/featured';
import Newsletter from '../components/newsletter';

const LandingPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <LandingGallery />
      <Featured />
      <Newsletter />
    </Fragment>
  );
};

export default LandingPage;
