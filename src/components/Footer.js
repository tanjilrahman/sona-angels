const Footer = () => {
  return (
    <div className='relative '>
      <div className='absolute w-full h-full bottom-0 bg-gradient-to-t from-primary opacity-20' />
      <div className='max-w-screen-xl mx-auto px-4 md:px-10 xl:px-0 pb-10 pt-28 lg:pt-40 flex flex-col justify-center'>
        <div className='flex justify-between items-center border-b pb-4 z-20'>
          <div className='flex lg:flex-row flex-col lg:space-x-6 items-center w-[60%] lg:w-2/5'>
            <img
              loading='lazy'
              src='/sonalogofinalnew_400x.webp'
              alt=''
              className='h-20 mr-auto'
            />
            <p className='pt-4'>
              A family owned business in the heart of New Jersey aiming to
              empower women with the finest pieces of Indian jewelry.
            </p>
          </div>

          <div className='flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-6 items-center'>
            <a
              href='https://www.facebook.com/sonajewelers'
              target='_blank'
              rel='noopener noreferrer'
              className='flex space-x-3 hover:underline'
            >
              <img loading='lazy' src='/images/facebook.svg' alt='' />
              <p>Facebook</p>
            </a>
            <a
              href='https://www.instagram.com/sonajewelers/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex space-x-3 hover:underline'
            >
              <img loading='lazy' src='/images/instagram.svg' alt='' />
              <p>Instagram</p>
            </a>
            <a
              href='https://twitter.com/sonajewelersusa'
              target='_blank'
              rel='noopener noreferrer'
              className='flex space-x-3 hover:underline'
            >
              <img loading='lazy' src='/images/twitter.svg' alt='' />
              <p>Twitter</p>
            </a>
          </div>
        </div>

        <div className='flex justify-between mt-8 z-20'>
          <p>
            Copyright © 2021.{' '}
            <span>
              <a
                href='https://www.tribeninjas.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                TribeNinjas
              </a>
            </span>
            . All rights reserved.
          </p>
          <div className='flex space-x-6'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
