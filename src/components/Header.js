import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 24) {
      return setScroll(true);
    } else {
      return setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white pt-6 pb-7  ${
        scroll && 'border-b'
      }`}
    >
      <Fade left={true} duration={500} opposite when={menuIsOpen}>
        <div
          className={`${
            menuIsOpen ? 'block' : 'hidden'
          } absolute top-full h-screen w-screen bg-white z-50`}
        >
          <div className='flex flex-col items-center mt-20 space-y-9'>
            <a
              href='#about'
              className='relative nav hover:text-primary transition-colors duration-200'
              onClick={() => setMenuIsOpen(false)}
            >
              <span className='nav-link'>ABOUT</span>
            </a>
            <a
              href='#angels'
              className='relative nav hover:text-primary transition-colors duration-200'
              onClick={() => setMenuIsOpen(false)}
            >
              <span className='nav-link'>ANGELS</span>
            </a>
            {/* <a
            href='#testimonials'
            className='relative nav hover:text-primary transition-colors duration-200'
            onClick={() => setMenuIsOpen(false)}
          >
            <span className='nav-link'>TESTIMONIALS</span>
          </a> */}
            <a
              href='https://www.sonajewelers.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='relative nav hover:text-primary transition-colors duration-200'
              onClick={() => setMenuIsOpen(false)}
            >
              <span className='nav-link uppercase'>Sona Jewelers</span>
            </a>
            <a
              href='tel:+12013209810'
              className='btn'
              onClick={() => setMenuIsOpen(false)}
            >
              <div className='m-auto'>
                <p>Contact Us</p>
              </div>
            </a>
          </div>
        </div>
      </Fade>

      <div className='max-w-screen-xl mx-auto px-4 md:px-10 xl:px-0 flex items-center relative'>
        <div className='lg:hidden'>
          {menuIsOpen ? (
            <img
              src='/images/close_black_24dp.svg'
              alt=''
              onClick={() => setMenuIsOpen(false)}
            />
          ) : (
            <img
              src='/images/menu_open_black_24dp.svg'
              alt=''
              onClick={() => setMenuIsOpen(true)}
            />
          )}
        </div>
        <div className='hidden lg:block space-x-8'>
          <a
            href='#about'
            className='relative nav hover:text-primary transition-colors duration-200'
          >
            <span className='nav-link'>ABOUT</span>
          </a>
          <a
            href='#angels'
            className='relative nav hover:text-primary transition-colors duration-200'
          >
            <span className='nav-link'>ANGELS</span>
          </a>
          {/* <a
            href='#testimonials'
            className='relative nav hover:text-primary transition-colors duration-200'
          >
            <span className='nav-link'>TESTIMONIALS</span>
          </a> */}
          <a
            href='https://www.sonajewelers.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='relative nav hover:text-primary transition-colors duration-200'
            onClick={() => setMenuIsOpen(false)}
          >
            <span className='nav-link uppercase'>Sona Jewelers</span>
          </a>
        </div>
        <div className='w-24 lg:w-32 absolute left-1/2 translate-x-[-48px] lg:translate-x-[-64px]'>
          <img src='/sonalogofinalnew_400x.webp' alt='logo' loading='lazy' />
        </div>
        <a href='tel:+12013209810' className='hidden lg:flex btn ml-auto'>
          <div className='m-auto'>
            <p>Contact Us</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
