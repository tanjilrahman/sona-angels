const TestimonialCard = ({ image, testimonial, name, handel, profileLink }) => {
  return (
    <div className='relative w-full h-[450px] lg:w-[476.4px] md:h-[650px]'>
      <img
        loading='lazy'
        src={image}
        alt=''
        className='w-full h-2/5 md:h-[45%] rounded-t-full lg:rounded-t-none object-cover object-top'
      />
      <img
        loading='lazy'
        src='/images/quote.svg'
        alt=''
        className='absolute top-[146px] -left-28 md:top-[235px] md:-left-56 lg:-left-40 h-16 w-16 md:h-28 md:w-28'
      />

      <div className='text-left mt-2 md:mt-4 p-2 lg:p-4'>
        <p className=' lg:leading-relaxed text-sm md:text-lg text-gray-600'>
          {testimonial}
        </p>
        <p className='font-display leading-none text-base md:text-xl font-semibold mt-6'>
          {name}
        </p>
        <a
          href={profileLink}
          target='_blank'
          rel='noopener noreferrer'
          className='font-display leading-none text-sm md:text-lg tracking-wide text-primary underline'
        >
          {handel}
        </a>
        {/* <div className='flex space-x-1 h-5 w-3 lg:w-5 lg:mt-1'>
          <img loading='lazy' src='/images/Star.svg' alt='' />
          <img loading='lazy' src='/images/Star.svg' alt='' />
          <img loading='lazy' src='/images/Star.svg' alt='' />
          <img loading='lazy' src='/images/Star.svg' alt='' />
          <img loading='lazy' src='/images/Star.svg' alt='' />
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialCard;
