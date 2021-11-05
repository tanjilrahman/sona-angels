import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div
      id='about'
      className='grid grid-cols-1 lg:grid-cols-2 items-center mt-28'
    >
      <Fade left={true}>
        <div className='relative w-full'>
          <div className='w-full h-[226px] lg:w-[504px] md:h-[350px] rounded-t-full border-2 border-b-0 border-primary absolute -top-4' />

          <div className='lg:frame w-full h-[400px] lg:w-[476.4px] md:h-[640px] rounded-t-full  object-cover ml-[13.8px]'>
            <Carousel
              className='w-11/12 h-[400px] lg:w-[476.4px] md:h-[640px] rounded-t-full lg:rounded-t-none object-cover'
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
              swipeable={false}
            >
              <div>
                <img
                  loading='lazy'
                  src='/images/DSK_9369-Edit.jpg'
                  alt=''
                  className='w-11/12 h-[400px] lg:w-[476.4px] md:h-[640px] rounded-t-full lg:rounded-t-none object-cover'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  src='/images/DSCF5200.jpg'
                  alt=''
                  className='w-11/12 h-[400px] lg:w-[476.4px] md:h-[640px] rounded-t-full lg:rounded-t-none object-cover'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  src='/images/DSK_9009-Edit.jpg'
                  alt=''
                  className='w-11/12 h-[400px] lg:w-[476.4px] md:h-[640px] rounded-t-full lg:rounded-t-none object-cover'
                />
              </div>
            </Carousel>
          </div>
          <img
            loading='lazy'
            src='/images/calander.svg'
            alt=''
            className='hidden h-48 w-48 lg:block absolute bottom-3 right-14'
          />
        </div>
      </Fade>

      <Fade right={true} cascade duration={800}>
        <div className='mt-10 lg:mt-0'>
          {/* <p className='font-display font-semibold text-base lg:text-lg text-primary uppercase tracking-wider'>
            About The Company
          </p> */}
          <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
            About The Company
          </h4>
          <p className='leading-loose mt-4 lg:mt-8 lg:pr-10'>
            Founded in 1989 in Iselin, NJ, Sona Jewelers is a family-owned
            business committed to encourage the youth and empowering women. We
            support local efforts particularly in fashion, motivation, health,
            and culture.
          </p>
          <a href='#angels' className='btn mt-10'>
            <div className='m-auto'>
              <p>Angels</p>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default About;
