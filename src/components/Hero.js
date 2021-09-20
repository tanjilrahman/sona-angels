import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-7 items-center mt-16 lg:mt-20 justify-between'>
      {/* mobile hero images */}

      <div className='lg:hidden relative ml-4 mb-8'>
        <Fade bottom={true}>
          <div className='w-10/12 h-[366px] md:h-[700px] rounded-t-full border-2 border-b-0 border-primary absolute -top-4 -left-4' />
        </Fade>
        <Fade bottom={true}>
          <div>
            <img
              src='/images/IMG-20210711-WA0005.jpg'
              alt=''
              className='w-10/12 h-[350px] md:h-[700px] rounded-t-full object-cover'
            />
          </div>
        </Fade>

        <div>
          <Fade right={true} delay={600}>
            <img
              src='/images/IMG-20210711-WA0001.jpg'
              alt=''
              className='h-[120px] md:h-[250px] md:w-[250px] w-[120px] rounded-full absolute right-4 -top-8'
            />
          </Fade>
        </div>

        <div>
          <Fade right={true} delay={800}>
            <img
              src='/images/3R1A2188.jpg'
              alt=''
              className='h-[80px] w-[80px] md:h-[150px] md:w-[150px] rounded-full absolute right-0 top-28 md:top-64'
            />
          </Fade>
        </div>

        {/* <div>
          <Fade right={true} delay={1000}>
            <img
              src='/images/3R1A2288.jpg'
              alt=''
              loading='lazy'
              className='h-[74px] w-[74px] rounded-full absolute left-[630px] top-36'
            />
          </Fade>
        </div> */}

        <div className='verticaltext font-bold text-2xl text-[#dae3e5] absolute right-2 bottom-0'>
          <Fade right={true} delay={500}>
            <p>Sona Angels</p>
          </Fade>
        </div>
      </div>

      {/* Hero text section */}

      <Fade left={true} cascade duration={800}>
        <div className='col-span-3 z-20'>
          <svg
            viewBox='0 0 84 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 lg:w-[84px] lg:h-[17px]'
          >
            <path
              d='M2.57715 15.8232L8.54383 3.88988C9.31385 2.34983 11.5116 2.34983 12.2816 3.88988L16.3794 12.0855C17.1494 13.6255 19.3471 13.6255 20.1172 12.0855L24.215 3.88988C24.985 2.34983 27.1827 2.34983 27.9527 3.88988L32.0505 12.0855C32.8206 13.6255 35.0183 13.6255 35.7883 12.0855L39.8861 3.88988C40.6561 2.34983 42.8539 2.34983 43.6239 3.88988L47.7217 12.0855C48.4917 13.6255 50.6894 13.6255 51.4594 12.0855L55.5572 3.88988C56.3273 2.34983 58.525 2.34983 59.295 3.88988L63.3928 12.0855C64.1628 13.6255 66.3606 13.6255 67.1306 12.0855L71.2284 3.88988C71.9984 2.34983 74.1961 2.34983 74.9661 3.88988L80.9328 15.8232'
              stroke='#FD5B2F'
              stroke-width='5.22371'
            />
          </svg>
          <h1 className='font-display text-4xl lg:text-7xl font-bold mt-3 lg:mt-4'>
            Join an <br /> elite group
          </h1>
          <p className='text-lg lg:text-xl mt-5 lg:mt-8'>
            Full of talented and impressive South Asian
            <br className='hidden lg:block' /> woman leaders in New Jersey
          </p>
          <div className='hidden lg:block absolute lg:h-[102px] lg:w-[777px] mt-6 lg:mt-20 rounded-full bg-[#F3F3F3] backdrop-blur-sm opacity-70' />
          <div className='relative h-16 lg:h-[102px] lg:w-[777px] mt-2 lg:mt-20 rounded-full flex md:flex-row flex-col justify-between md:items-center lg:px-6 text-sm md:text-base space-y-5 md:space-y-0'>
            <div className='flex space-x-2 md:space-x-3 md:text-lg items-center'>
              <img
                loading='lazy'
                src='/images/location-icon.svg'
                alt=''
                className='h-6 md:h-8'
              />
              <p>6 Marconi Ave, Iselin, NJ 08830, United States</p>
            </div>
            {/* <div className='hidden lg:block'>
              <p>United States</p>
            </div> */}
            <div className='ml-auto'>
              <a
                href='#contact'
                className='md:w-[176.56px] md:h-[56.42px] lg:btn btn-2'
              >
                <div className='m-auto'>
                  <p>Schedule Visit</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Fade>

      {/* Desktop Hero images */}

      <div className='hidden lg:block col-span-4 relative ml-6'>
        <Fade bottom={true}>
          <div className='w-[480px] h-[660px] rounded-t-full border-2 border-b-0 border-primary absolute -top-5 -left-6' />
        </Fade>
        <Fade bottom={true}>
          <div>
            <img
              src='/images/IMG-20210711-WA0005.jpg'
              alt=''
              className='w-[476.4px] h-[640px] rounded-t-full object-cover'
            />
          </div>
        </Fade>

        <div>
          <Fade right={true} delay={600}>
            <img
              src='/images/IMG-20210711-WA0001.jpg'
              alt=''
              className='h-[230px] w-[230px] rounded-full absolute left-[350px] -top-10'
            />
          </Fade>
        </div>

        <div>
          <Fade right={true} delay={800}>
            <img
              src='/images/3R1A2188.jpg'
              alt=''
              className='h-[141px] w-[141px] rounded-full absolute left-[480px] top-64'
            />
          </Fade>
        </div>

        <div>
          <Fade right={true} delay={1000}>
            <img
              src='/images/3R1A2288.jpg'
              alt=''
              className='h-[74px] w-[74px] rounded-full absolute left-[630px] top-36'
            />
          </Fade>
        </div>

        <div className='verticaltext font-bold text-[40px] text-[#dae3e5] absolute left-[485px] bottom-0'>
          <Fade right={true} delay={500}>
            <p>Sona Angels</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
