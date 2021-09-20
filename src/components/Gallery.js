import Fade from 'react-reveal/Fade';
import YoutubeEmbed from './YoutubeEmbed';
const Gallery = () => {
  return (
    <div className='mt-20 lg:mt-64 space-y-4 lg:space-y-10'>
      <div className='mt-4 lg:mt-8'>
        <Fade left={true}>
          <p className='font-display font-semibold text-base lg:text-lg text-primary uppercase tracking-wider'>
            Gallery
          </p>
          <h4 className='font-display leading-normal lg:leading-normal text-3xl lg:text-5xl lg:mt-3'>
            Thank you for all that you do.
          </h4>
        </Fade>
      </div>

      <Fade bottom={true}>
        <YoutubeEmbed embedId='oc31JcnWkRE' />
        {/* <video
          src='/videos/Sona Jewelers Chhvari IGTV V3.mp4'
          controls='controls'
        />
        <video
          src='/videos/Social Media_Sona Ad 1080p_2.mp4'
          controls='controls'
        />
        <video
          src='/videos/Sanya Jewelers Ad IG STORY V1_2.mp4'
          controls='controls'
        /> */}
      </Fade>

      <div className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0'>
        <div>
          <div className='space-y-4 lg:space-y-10 '>
            <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 items-center'>
              <Fade left={true}>
                <img
                  loading='lazy'
                  src='/images/DSC_0569.jpg'
                  alt=''
                  className='w-full lg:w-[280px] lg:h-[280px]'
                />
              </Fade>
              <Fade left={true} delay={200}>
                <img
                  loading='lazy'
                  src='/images/IMG-20210711-WA0000.jpg'
                  alt=''
                  className='w-full lg:h-[280px] lg:w-[380px] lg:object-cover'
                />
              </Fade>
            </div>
            <div>
              <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 items-center'>
                <Fade bottom={true} delay={400}>
                  <img
                    loading='lazy'
                    src='/images/IMG-20210711-WA0004.jpg'
                    alt=''
                    className='w-full lg:h-[280px] lg:w-[380px] lg:object-cover'
                  />
                </Fade>
                <Fade bottom={true} delay={600}>
                  <img
                    loading='lazy'
                    src='/images/DSCF2599.jpg'
                    alt=''
                    className='w-full lg:w-[280px] lg:h-[280px]'
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-auto'>
          <Fade right={true}>
            <img
              loading='lazy'
              src='/images/Image from iOS.jpg'
              alt=''
              className='w-full h-[500px] lg:w-[533px] lg:h-[605px] object-cover lg:mx-auto'
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
