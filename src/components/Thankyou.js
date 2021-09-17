import Fade from 'react-reveal/Fade';

const Thankyou = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-20 lg:mt-32 overflow-y-hidden'>
      {/* Mobile image section */}

      <Fade right={true}>
        <div className='lg:hidden overflow-y-hidden'>
          <img
            loading='lazy'
            src='/images/DSK_9459-Edit.jpg'
            alt=''
            className='w-full h-[450px] object-cover ml-auto'
          />
        </div>
      </Fade>

      {/* Text section */}

      <Fade left={true} cascade duration={800}>
        <div className='overflow-y-hidden mt-6 lg:mt-0'>
          <p className='font-display font-semibold text-base lg:text-lg text-primary uppercase tracking-wider'>
            Thank YoU
          </p>
          <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
            Thank you for all <br /> that you do.
          </h4>
          <p className='leading-loose mt-4 lg:mt-8 lg:pr-10'>
            We are here to help spread your story and ours via various unique
            events and social media campaigns. We hope you join our exclusive
            family, and look forward to supporting one another in our future
            goals and life’s journey!
          </p>
          <a href='#contact' className='btn-2 mt-8 lg:mt-12'>
            <div className='m-auto'>
              <p>Become a member</p>
            </div>
          </a>
        </div>
      </Fade>

      {/* Desktop image section */}

      <Fade right={true}>
        <div className='hidden lg:block overflow-y-hidden'>
          <img
            loading='lazy'
            src='/images/DSK_9459-Edit.jpg'
            alt=''
            className='w-[533px] h-[710px] object-cover ml-auto'
          />
        </div>
      </Fade>
    </div>
  );
};

export default Thankyou;
