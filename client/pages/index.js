import Link from 'next/link';
import { Fragment } from 'react';
import Register from '../components/register';
import styled from 'styled-components';
import { device } from '../components/styles/device';
import theme from '../components/styles/theme';
import HeroSection from '../components/hero/heroSection';
import LandingGallery from '../components/gallery/landingGallery';

const { colors, fontSizes } = theme;

const LandingPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <LandingGallery />
      <div className='featured'>
        <div className='featured__box-row1'>
          <div className='featured__img'>
            <img src='' alt='' />
          </div>
          <div className='featured__text'>
            <div className='featured__heading'>
              <h2>Why choosing our services?</h2>
            </div>
            <div className='featured__subhead'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium repellat temporibus explicabo, reiciendis ullam
                illo.
              </p>
            </div>
          </div>
        </div>
        <div className='featured__box-row2'>
          <div className='featured__img'>
            <img src='' alt='' />
          </div>
          <div className='featured__text'>
            <div className='featured__heading'>
              <h2>We serverd over 500,000 customers.</h2>
            </div>
            <div className='featured__subhead'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis unde cumque ullam!
              </p>
            </div>
          </div>
        </div>
        <div className='featured__box-row3'>
          <div className='featured__img'>
            <img src='' alt='' />
          </div>
          <div className='featured__text'>
            <div className='featured__heading'>
              <h2>Start Today and gain a free ticket!</h2>
            </div>
            <div className='featured__subhead'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis, omnis? Assumenda debitis commodi velit maiores vero.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className='newsletter'>
        <Register />
      </section>
    </Fragment>
  );
};

export default LandingPage;
