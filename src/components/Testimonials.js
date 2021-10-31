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
          <div className='w-full h-[460px] lg:w-[504px] md:h-[650px] rounded-t-full border-2 border-b-0 border-primary absolute -top-4' />
          <div className='lg:frame w-full h-[460px] lg:w-[476.4px] md:h-[650px] rounded-t-full  object-cover ml-[13.8px]'>
            <Carousel
              className='w-11/12 h-[460px] lg:w-[476.4px] md:h-[650px] rounded-t-full lg:rounded-t-none object-cover'
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
              swipeable={false}
            >
              <TestimonialCard
              scroll={true}
                image='/images/3R1A2349.jpg'
                name='Nisha Pawar'
                handel='@lovelaughmirch'
                profileLink='https://www.instagram.com/lovelaughmirch/'
                testimonial='It was an absolute pleasure working with Sona Jewelers. They are the jewelers we’ve shopped at for all of our family milestones so partnering with them felt so natural. The communication on deliverables was clear and timely. I truly felt they valued my work and appreciated all my creative efforts. Everyone from their staff to their marketing team was respectful and timely on all aspects of our collaboration. Our partnership is one of my favorites til date.'
              />
              <TestimonialCard
                image='/images/IMG_6908.JPG'
                name='Sanya Arora'
                handel='@sankissedskin'
                profileLink='https://www.instagram.com/sankissedskin/'
                testimonial='Sona Jewelers has been a house hold name for as long as I can remember. Their quality has never diminished. Every time there’s a wedding, it’s a known thing to go to Sona to find the best pieces of jewelry for the events. Riz has also helped in taking the prestigious name forward through his own love for beautiful pieces and marketing etiquette. I can’t wait to visit again! ♥️'
              />
              <TestimonialCard
                scroll={true}
                image='/images/DSC_0519.jpg'
                name='Hena Bajaj'
                handel='@henabajaj'
                profileLink='https://www.instagram.com/henabajaj/'
                testimonial='Being someone who truly cares about my career growth and education, I have put many of my interest and passions on the side. When hearing about the Sona Angel program, I knew that this was a great way to pursue my interest in modeling and vouching for woman-empowerment. The entire Sona Jewelers team was an absolute delight to work with. I truly appreciated how understanding they were given my schedule as being a full-time employee and a part-time MBA student. Being a Sona Angel reminded me the importance of pursuing your interests and passions even if your priority is your career. We are more than our jobs and education. Thank you Sona Jewelers for the opportunities to work with you thus far!'
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
