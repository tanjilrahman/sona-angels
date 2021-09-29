import './index.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import Success from './components/Success';

function App() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      {success ? (
        <Success />
      ) : (
        <div>
          <Header />
          <div className='md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 xl:px-0 overflow-x-hidden'>
            <Hero />
            <Body />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
