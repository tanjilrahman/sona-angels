import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import Success from './components/Success';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/thankyou' component={Success} />
          <Route path='/'>
            <div>
              <Header />
              <div className='md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 xl:px-0 overflow-x-hidden'>
                <Hero />
                <Body />
              </div>
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
