import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div>
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
