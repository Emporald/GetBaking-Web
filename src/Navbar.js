const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Get Baking!</h1>            
            <div className="links">
                    <a href="#homepage"
                    style={{
                    color: 'black',
                    backgroundColor: '#FF80C4',
                    borderRadius: '8px'
                }}>Home</a>

                    <a href="#recipepage" 
                    style={{
                    color: 'black',
                    backgroundColor: '#FF80C4',
                    borderRadius: '8px'
                }}>View Recipies</a>

                    <a href="#createrecipepage"                   
                    style={{
                    color: 'black',
                    backgroundColor: '#FF80C4',
                    borderRadius: '8px'
                }}>Create Recipe</a>

            </div>
        </nav>

    );
}
 
export default Navbar;