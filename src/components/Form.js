import Fade from 'react-reveal/Fade';

const Form = () => {
  return (
    <div id='contact'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-40 lg:mt-28'>
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

        <Fade left={true} cascade duration={800}>
          <div className='mt-10 lg:mt-0'>
            <p className='font-display font-semibold text-base lg:text-lg text-primary uppercase tracking-wider'>
              Become A Member
            </p>
            <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
              Ready to try different work environment now?
            </h4>
            <p className='leading-loose mt-4 lg:mt-8 lg:pr-10'>
              Sona Jewelers is proud to present a healthy and positive work
              environment for its aspiring angels where individual contributions
              are valued and appreciated. Join us now to experience a whole new
              kind of work environment where we will help you achieve your true
              potential.
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
        <form name='Sona Angels contact form' method='post' action='/success'>
          <input
            type='hidden'
            name='form-name'
            value='Sona Angels contact form'
          />
          <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16 mt-6 lg:mt-2 mx-1'>
            <Fade left={true}>
              <div className='space-y-4 lg:space-y-8'>
                <div className='space-y-2 lg:space-y-4 input-group'>
                  <p className='font-display font-bold text-[#C4C4C4]'>Name</p>
                  <input
                    type='text'
                    required
                    name='name'
                    className='w-full lg:w-[484px] lg:h-[75px] text-base lg:text-lg p-3 lg:p-4 rounded-xl shadow-md lg:shadow-lg border border-[#C4C4C4] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200'
                  />
                </div>
                <div className='space-y-2 lg:space-y-4 input-group'>
                  <p className='font-display font-bold text-[#C4C4C4]'>Email</p>
                  <input
                    required
                    type='email'
                    name='email'
                    className='w-full lg:w-[484px] lg:h-[75px] text-base lg:text-lg p-3 lg:p-4 rounded-xl shadow-md lg:shadow-lg border border-[#C4C4C4] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200'
                  />
                </div>
              </div>
            </Fade>
            <Fade right={true}>
              <div className='space-y-2  lg:space-y-4 flex-1 input-group'>
                <p className='font-display font-bold text-[#C4C4C4]'>Message</p>
                <textarea
                  required
                  name='message'
                  className='w-full h-40 lg:h-[223px] text-base lg:text-lg px-3 lg:px-4 py-3 leading-relaxed rounded-xl shadow-md lg:shadow-lg border border-[#C4C4C4] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors duration-200'
                ></textarea>
              </div>
            </Fade>
          </div>
          <Fade right={true}>
            <button type='submit' className='block ml-auto mt-6 lg:mt-10'>
              <div className='btn'>
                <div className='m-auto'>
                  <p>Submit</p>
                </div>
              </div>
            </button>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default Form;
