import { Helmet } from 'react-helmet';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Helmet>
        <title>
          Sona Angels, Join an elite group Full of talented and impressive South
          Asian woman leaders in New Jersey
        </title>
        <meta name='description' content='Sona Angels' />

        <meta
          itemprop='name'
          content='Sona Angels, Join an elite group Full of talented and impressive South Asian woman leaders in New Jersey'
        />
        <meta itemprop='description' content='Sona Angels' />
        <meta itemprop='image' content='/sonalogofinalnew_400x.webp' />

        <meta property='og:url' content='https://www.sonajewelers.com' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Sona Angels, Join an elite group Full of talented and impressive South Asian woman leaders in New Jersey'
        />
        <meta property='og:description' content='Sona Angels' />
        <meta property='og:image' content='/sonalogofinalnew_400x.webp' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Sona Angels, Join an elite group Full of talented and impressive South Asian woman leaders in New Jersey'
        />
        <meta name='twitter:description' content='Sona Angels' />
        <meta name='twitter:image' content='/sonalogofinalnew_400x.webp' />
      </Helmet>

      <Header />
      <div className='md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 xl:px-0 overflow-x-hidden'>
        <Hero />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
