import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "c7f5e532";
  const MY_KEY = "20800f85b5950f0b1ef897c2e955fddf9b";
  const [mySearch, setMySearch] = useState ("");
  const [myRecipes, setMyRecipes] = useState ([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect (()=> {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=%${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])
  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
    
  }
  const finalSearch = (e) => {
    e.preventDefault ()
    setWordSubmitted(mySearch)
  }
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container heading'>
        <form onSubmit={finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button className='btn' onClick={finalSearch}>
          Search
        </button>
      </div>
      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index} 
        label={element.recipe.label} 

        image={element.recipe.image} 
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}/>
      ))}
    </div>
  );
}

export default App;
