import Fade from 'react-reveal/Fade';

const Vision = () => {
  return (
    <div
      id='vision'
      className='grid grid-cols-1 lg:grid-cols-2 items-center mt-36'
    >
      {/* Mobile images section */}

      <div className='lg:hidden relative mb-96 md:mb-[550px]'>
        <Fade bottom={true}>
          <div className='w-full h-[340px] bg-[#FFF3C8] rounded-tl-[120px] absolute -top-4' />
        </Fade>

        <Fade left={true}>
          <img
            loading='lazy'
            src='/images/IMG_1497.jpg'
            alt=''
            className='absolute w-[210px] h-[210px] md:w-[350px] md:h-[350px] top-36 md:left-6 left-2'
          />
        </Fade>
        <Fade right={true} delay={200}>
          <img
            loading='lazy'
            src='/images/DSK_8914-Edit.jpg'
            alt=''
            className='absolute w-[140px] h-[140px] md:w-[260px] md:h-[260px] md:top-24 top-12 md:right-6 right-2'
          />
        </Fade>
        <Fade left={true} delay={400}>
          <img
            loading='lazy'
            src='/images/DSK_8377-Edit.jpg'
            alt=''
            className='absolute w-[140px] h-[140px] md:w-[260px] md:h-[260px] md:-top-24 -top-12 md:left-24 left-12'
          />
        </Fade>
        <Fade right={true} delay={600}>
          <img
            loading='lazy'
            src='/images/DSK_8261-Edit.jpg'
            alt=''
            className='absolute w-[72px] h-[72px] top-[-70px] md:w-[150px] md:h-[150px] md:right-32 right-[70px]'
          />
        </Fade>
      </div>

      {/* Text section */}

      <div>
        <Fade left={true}>
          <p className='font-display font-semibold text-base lg:text-lg text-primary uppercase tracking-wider'>
            Visions
          </p>
          <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
            What’s great about the Sona Angels?
          </h4>
        </Fade>

        <div className='grid grid-cols-1 lg:grid-cols-2 leading-loose mt-4 lg:mt-8 space-y-4 lg:space-y-0 lg:space-x-4'>
          <div className='space-y-4 lg:space-y-10'>
            <Fade bottom={true}>
              <div className='flex'>
                <img
                  loading='lazy'
                  src='/images/Icon 1.svg'
                  alt=''
                  className='mb-auto mt-2 mr-3'
                />
                <div>
                  Sona angels are chosen based on a strong independent woman who
                  works everyday to better themselves and to being light to the
                  world around them.
                </div>
              </div>
            </Fade>

            <Fade bottom={true}>
              <div className='flex'>
                <img
                  loading='lazy'
                  src='/images/Icon 2.svg'
                  alt=''
                  className='mb-auto mt-2 mr-3'
                />
                <div>
                  They are doctors, artists, dancers, spokeswomen, mothers,
                  sisters, wives, daughters, and our better half.
                </div>
              </div>
            </Fade>
          </div>
          <div>
            <Fade bottom={true}>
              <div className='flex'>
                <img
                  loading='lazy'
                  src='/images/Icon 3.svg'
                  alt=''
                  className='mb-auto mt-2 mr-3'
                />
                <div>
                  They are an angel sent to earth to make everyone’s day
                  brighter through motivation, hard work, and spreading
                  positivity!
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Fade bottom={true} delay={500}>
          <a href='#contact' className='btn-2 mt-8 lg:mt-12'>
            <div className='m-auto'>
              <p>Become a member</p>
            </div>
          </a>
        </Fade>
      </div>

      {/* Desktop images section */}

      <div className='hidden lg:block relative'>
        <div className='w-[390px] h-[320px] bg-[#FFF3C8] rounded-tl-[146px] absolute -bottom-32 left-28' />
        <Fade right={true}>
          <img
            loading='lazy'
            src='/images/IMG_1497.jpg'
            alt=''
            className='absolute w-[300px] h-[300px] top-24 left-32'
          />
        </Fade>
        <Fade right={true} delay={200}>
          <img
            loading='lazy'
            src='/images/DSK_8914-Edit.jpg'
            alt=''
            className='absolute w-[200px] h-[200px] top-0 right-6'
          />
        </Fade>
        <Fade right={true} delay={400}>
          <img
            loading='lazy'
            src='/images/DSK_8377-Edit.jpg'
            alt=''
            className='absolute w-[200px] h-[200px] bottom-0 right-56'
          />
        </Fade>
        <Fade right={true} delay={600}>
          <img
            loading='lazy'
            src='/images/DSK_8261-Edit.jpg'
            alt=''
            className='absolute w-[88px] h-[88px] bottom-40 right-[138px]'
          />
        </Fade>
      </div>
    </div>
  );
};

export default Vision;
