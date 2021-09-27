import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Fade from 'react-reveal/Fade';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <div
      id='testimonials'
      className='grid grid-cols-1 lg:grid-cols-2 items-center mt-24 lg:mt-40'
    >
      <Fade left={true}>
        <div className='relative lg:ml-4'>
          <div className='w-full h-[470px] lg:w-[504px] md:h-[650px] rounded-t-full border-2 border-b-0 border-primary absolute -top-4' />
          <div className='lg:frame w-full h-[470px] lg:w-[476.4px] md:h-[650px] rounded-t-full  object-cover ml-[13.8px]'>
            <Carousel
              className='w-11/12 h-[470px] lg:w-[476.4px] md:h-[650px] rounded-t-full lg:rounded-t-none object-cover'
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
            >
              <TestimonialCard
                image='/images/DSCF2264.jpg'
                name='Chhavi Verg'
                handel='@chhaviverg'
                profileLink='https://www.instagram.com/chhaviverg/'
                testimonial='As a new model, I was skeptical to work with Sona Jewelers, but
                my friends and colleagues highly recommended me to work with
                them. Together, we managed to pull off a successful campaign
                that performed beyond my wildest expectations!'
              />
              <TestimonialCard
                image='/images/IMG_6908.JPG'
                name='Sanya Arora'
                handel='@sankissedskin'
                profileLink='https://www.instagram.com/sankissedskin/'
                testimonial='Sona Jewelers has been a house hold name for as long as I can remember. Their quality has never diminished. Every time there’s a wedding, it’s a known thing to go to Sona to find the best pieces of jewelry for the events. Riz has also helped in taking the prestigious name forward through his own love for beautiful pieces and marketing etiquette. I can’t wait to visit again! ♥️'
              />
              <TestimonialCard
                image='/images/IMG_6907.JPG'
                name='Manya'
                handel='@manyasaaraswat'
                profileLink='https://www.instagram.com/manyasaaraswat/'
                testimonial='It was a treat working for Sona Jewelers! They practically did
                everything – with almost no time or effort for me! The best part
                was that I could completely trust their team to represent my work
                in the utmost professional manner.'
              />
            </Carousel>
          </div>
        </div>
      </Fade>
      <Fade right={true} cascade duration={800}>
        <div className='mt-10 lg:mt-0'>
          <p className='font-display font-semibold text-base md:text-lg text-primary uppercase tracking-wider'>
            Testimonials
          </p>
          <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
            Hear from the Sona Angels
          </h4>
          <p className='leading-loose mt-4 lg:mt-8 lg:pr-10'>
            We at Sona Jewelers love to work with aspiring angels from the South
            Asian community. We work with leaders who love to empower women
            through their work. Hear from the people who have already work with
            us about the experience of being a Sona Angel.
          </p>
          <a href='#contact' className='btn-2 mt-10'>
            <div className='m-auto'>
              <p>Become a member</p>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Testimonials;
