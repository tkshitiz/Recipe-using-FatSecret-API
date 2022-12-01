import React ,{useEffect,useState} from 'react'
import './App.css';
import Recipes from './Recipes'
const App = () => {

  const APP_ID= "939899e7"
  const APP_KEY="5d31937e72d02c22a2775c9c61199939"

  const [recipes, setRecipes ] = useState([])
  const [search, setSearch] = useState('')
  const [query , setQuery] = useState('chicken')
  
  useEffect(()=>{
    getRecipes()
  },[query])
  
  const getRecipes= async () => {
   const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   const data= await response.json()
   setRecipes(data.hits)
    //  console.log(data.hits) 
  }
  const updateSearch =(e) => {
    setSearch(e.target.value) 
    // console.log(e.target.value)
  }
  
  const searchRecipes=(e) =>{
    e.preventDefault()
    setQuery(search)
  }
  return (
    <div className='App'>
      <form onSubmit={searchRecipes} className='search-form'>
        <input type='text' className='search-bar' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
       <div className='recipes'>
       {recipes.map((recipe)=>
          <Recipes title={recipe.recipe.label} calorie={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
       )
        }
        </div>
       
    </div>
  )
}

export default App



