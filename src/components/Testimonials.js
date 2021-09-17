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
          <div className='w-full h-[400px] lg:w-[504px] md:h-[640px] rounded-t-full border-2 border-b-0 border-primary absolute -top-4' />
          <div className='lg:frame w-full h-[400px] lg:w-[476.4px] md:h-[640px] rounded-t-full  object-cover ml-[13.8px]'>
            <Carousel
              className='w-11/12 h-[400px] lg:w-[476.4px] md:h-[640px] rounded-t-full lg:rounded-t-none object-cover'
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
                testimonial='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis odit ducimus fugiat nesciunt, voluptatibus
                    doloribus nihil voluptatem aliquid consequatur ab? Rem,
                    voluptatem alias! Facilis vero dolorem, tempore distinctio
                    quibusdam hic.'
              />
              <TestimonialCard
                image='/images/IMG_6908.JPG'
                name='Sanya Arora'
                handel='@sankissedskin'
                profileLink='https://www.instagram.com/sankissedskin/'
                testimonial='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint facilis asperiores vitae cum velit dolorem? Tempora, unde, nostrum quia neque praesentium placeat non exercitationem reprehenderit laborum impedit ratione obcaecati.'
              />
              <TestimonialCard
                image='/images/IMG_6907.JPG'
                name='Manya'
                handel='@manyasaaraswat'
                profileLink='https://www.instagram.com/manyasaaraswat/'
                testimonial='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti eaque perferendis, corporis repellat ducimus obcaecati quos, ipsa quibusdam, nam esse sed dignissimos atque? Sequi iure sapiente a distinctio officiis!'
              />
            </Carousel>
          </div>
        </div>
      </Fade>
      <Fade right={true}>
        <div className='mt-10 lg:mt-0'>
          <p className='font-display font-semibold text-base md:text-lg text-primary uppercase tracking-wider'>
            Testimonials
          </p>
          <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
            Lorem ipsum dolor sit
          </h4>
          <p className='leading-loose mt-4 lg:mt-8 lg:pr-10'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            beatae doloribus alias soluta facere. Nesciunt libero fuga porro
            itaque debitis nostrum voluptates soluta, labore ullam harum
            tempora, neque odio exercitationem.
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
