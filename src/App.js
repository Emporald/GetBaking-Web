import Navbar from './Navbar'; /* Importing Navigation Bar Component from Navbar.js */
import Home from './Home'; /* Importing HomePage Component from Home.js */
import Footer from './Footer'; /* Importing Footer Component from Footer.js */
import Recipe from './Recipe'; /* Importing RecipePage Component from Recipe.js */
import CreateRecipe from './CreateRecipe'; /* Importing CreateRecipe Component from Recipe.js */

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
