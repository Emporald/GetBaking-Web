const CreateRecipe = () => {
    return (
        
    <div className="create-recipe">
        <div className='space-line' />
        <h1 className="title" >Create Your Recipe</h1>
        <p>Create and share your recipe with Get Baking community! Our moderation team have to approve the recipe before uploading to the website!</p>
        <form className="create-recipe-form">
            <label className="create-recipe">
            <br /><p>Your Name:</p>
            <input type="text" name="name" />
            <br /><p>Email:</p>
            <input type="email" name="email" />
            <br /><p>Recipe Name:</p>
            <input type="text" name="r-name" />
            <br /><p>Recipe Description:</p>
            <input type="text" name="r-desc"/>
            <br /><p>Recipe Ingredients:</p>
            <input type="text" name="r-ingre"/>
            <br /><p>Recipe Instructions:</p>
            <input type="text" name="r-instructions"/>
            </label>
            <br /><input type="submit" value="Submit" />
        </form>
    </div>
    );
}
 
export default CreateRecipe;