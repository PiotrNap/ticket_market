import Link from 'next/link';
import { Fragment } from 'react';
import Register from '../components/register';
import landingHero from '../public/landingHero';
import landingHeroMobile from '../public/landingHeroMobile';

const LandingPage = () => {
  return (
    <Fragment>
      <div className='hero'>
        <div className='hero__section'>
          <div className='hero__section-heading'>
            <h1>Don't miss the latest events!</h1>
          </div>
          <div className='hero__section-sub'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sint?
            </p>
          </div>
          <div className='hero__section-btn'>
            <Link href='auth/signup'>
              <button className='btn-large'>Make an account</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='showcase'>
        <div className='showcase__grid'>
          <div className='block-1'>
            <div className='block-1__heading'>
              <h3>Concert 1</h3>
            </div>
            <div className='block-1__info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className='block-2'>
            <div className='block-2__heading'>
              <h3>Concert 2</h3>
            </div>
            <div className='block-2__info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className='block-3'>
            <div className='block-3__heading'>
              <h3>Concert 3</h3>
            </div>
            <div className='block-3__info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className='block-4'>
            <div className='block-4__heading'>
              <h3>Concert 4</h3>
            </div>
            <div className='block-4__info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
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
      <style jsx>{`
        .hero {
          width: 100%;
          height: 70vh;
          background-image: {landingHero};
        }
        `}</style>
    </Fragment>
  );
};

export default LandingPage;
