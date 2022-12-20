import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Recipe from './Recipe';
import CreateRecipe from './CreateRecipe';

function App() {
  return (   
    <div className="App">
      <Navbar />
      <div className='content'>
        <div id='homepage'><Home /> </div>
        <div id='recipepage'><Recipe /></div>
        <div id='createrecipepage'><CreateRecipe /></div>
        <br /> <br /> <br /> <br /> <br />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
