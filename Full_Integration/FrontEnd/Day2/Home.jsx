import Footer from '../../components/ui/Footer'
import NavBar from '/src/components/ui/NavBar.jsx'
import Head from './Headsection';
import About from './About';
import Works from './HowItWorks';

const Home = () => {
  return (
    <div>
      <NavBar/><br/><br/>
      <Head/>
      <About/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default Home