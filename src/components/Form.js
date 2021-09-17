import Fade from 'react-reveal/Fade';

const Form = () => {
  return (
    <div id='contact'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-16 lg:mt-28'>
        {/* Mobile image section */}

        <div className='lg:hidden relative w-full ml-[8px]'>
          <Fade right={true}>
            <div className='w-10/12 h-[400px] md:h-[700px] rounded-t-full border-2 border-b-0 border-primary absolute top-0 left-0' />
          </Fade>
          <Fade right={true}>
            <img
              loading='lazy'
              src='/images/IMG-20210711-WA0003.jpg'
              alt=''
              className='w-11/12 md:h-[700px] h-[400px] rounded-t-full object-cover object-top mx-auto'
            />
          </Fade>
        </div>

        {/* Text section */}

        <Fade left={true}>
          <div className='mt-10 lg:mt-0'>
            <p className='font-display font-semibold text-base lg:text-lg text-primary uppercase tracking-wider'>
              Become A Member
            </p>
            <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
              Ready to try different work environment now?
            </h4>
            <p className='leading-loose mt-4 lg:mt-8 lg:pr-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Fade>

        {/* Desktop image section */}

        <div className='hidden lg:block relative ml-auto'>
          <Fade right={true}>
            <div className='w-[420px] h-[640px] rounded-t-full border-2 border-b-0 border-primary absolute top-0 -left-8' />
          </Fade>
          <Fade right={true}>
            <div>
              <img
                loading='lazy'
                src='/images/IMG-20210711-WA0003.jpg'
                alt=''
                className='w-[476.4px] h-[640px] rounded-t-full object-cover'
              />
            </div>
          </Fade>
        </div>
      </div>

      {/* Form section */}

      <div>
        <Fade bottom={true}>
          <form name='Sona Angels contact form' netlify>
            <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16 mt-6 lg:mt-2 mx-1'>
              <div className='space-y-4 lg:space-y-8'>
                <div className='space-y-2 lg:space-y-4 input-group'>
                  <p className='font-display font-bold text-[#C4C4C4]'>Name</p>
                  <input
                    type='text'
                    name='name'
                    className='w-full lg:w-[484px] lg:h-[75px] text-base lg:text-lg p-3 lg:p-4 rounded-xl shadow-md lg:shadow-lg border border-[#C4C4C4] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200'
                  />
                </div>
                <div className='space-y-2 lg:space-y-4 input-group'>
                  <p className='font-display font-bold text-[#C4C4C4]'>Email</p>
                  <input
                    type='email'
                    name='email'
                    className='w-full lg:w-[484px] lg:h-[75px] text-base lg:text-lg p-3 lg:p-4 rounded-xl shadow-md lg:shadow-lg border border-[#C4C4C4] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200'
                  />
                </div>
              </div>
              <div className='space-y-2  lg:space-y-4 flex-1 input-group'>
                <p className='font-display font-bold text-[#C4C4C4]'>Message</p>
                <textarea
                  name='message'
                  className='w-full h-40 lg:h-[223px] text-base lg:text-lg px-3 lg:px-4 py-3 leading-relaxed rounded-xl shadow-md lg:shadow-lg border border-[#C4C4C4] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200'
                ></textarea>
              </div>
            </div>
            <button type='submit' className='block ml-auto mt-6 lg:mt-10'>
              <div className='btn'>
                <div className='m-auto'>
                  <p>Submit</p>
                </div>
              </div>
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default Form;
