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
        <Home />
        <Recipe />
        <CreateRecipe />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
