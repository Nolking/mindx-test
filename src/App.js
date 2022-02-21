import React, { useState} from 'react';
import { Card, Button } from 'antd';
import Header from './Layout/Header'
import MealList from './Component/MealList';
import CategoryList from './Component/CategoryList';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([])
  const [searchInput, setSearchInput] = useState('')
  function searchInputHandler(event) {
    setSearchInput(event.target.value);
  }
  async function searchByName() {
    setCategories([])
    setMeals([])
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchInput)
    .then(res=>res.json())
    .then(data=>  {let displayMeals = []
      displayMeals = data.meals.map(meal => {return {
          id: meal.idMeal,
          area: meal.strArea,
          category: meal.strCategory,
          ingredients: `${meal.strIngredient1}, ${ meal.strIngredient2},  ${meal.strIngredient3}`,
          name: meal.strMeal,
          instruction: meal.strInstructions
        }
      })
      setMeals(displayMeals);
    })
  }
  async function searchByFirstLetter() {
    setCategories([]) 
    setMeals([])
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+searchInput)
    .then(res=>res.json())
    .then(data=>  {
      let displayMeals = []
      displayMeals = data.meals.map(meal => {return {
          id: meal.idMeal,
          area: meal.strArea,
          category: meal.strCategory,
          ingredients: `${meal.strIngredient1}, ${ meal.strIngredient2},  ${meal.strIngredient3}`,
          name: meal.strMeal,
          instruction: meal.strInstructions
        }
      })
      setMeals(displayMeals);
    })
  }
  async function lookUpById() {
    setMeals([])
    await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+searchInput)
    .then(res=>res.json())
    .then(data=>  {
      let displayMeals = []
      displayMeals = data.meals.map(meal => {return {
          id: meal.idMeal,
          area: meal.strArea,
          category: meal.strCategory,
          ingredients: `${meal.strIngredient1}, ${ meal.strIngredient2},  ${meal.strIngredient3}`,
          name: meal.strMeal,
          instruction: meal.strInstructions
        }
      })
      setMeals(displayMeals);
    })
  }
  async function lookUpRandom() {
    setCategories([])
    await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=>res.json())
    .then(data=>  {let displayMeals = []
      displayMeals = data.meals.map(meal => {return {
          id: meal.idMeal,
          area: meal.strArea,
          category: meal.strCategory,
          ingredients: `${meal.strIngredient1}, ${ meal.strIngredient2},  ${meal.strIngredient3}`,
          name: meal.strMeal,
          instruction: meal.strInstructions
        }
      })
      setMeals(displayMeals);
    })
  }
  async function listAllCategories() {
    setMeals([])
    await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>res.json())
    .then(data=>  {let displayCats = []
      displayCats = data.categories.map(category => {return {
          catId: category.idCategory,
          catPhoto: category.strCategoryThumb,
          catName: category.strCategory
        }
      })
      setCategories(displayCats);
    })
  }
  async function listCatAreasIngr() {
    await fetch('https://www.themealdb.com/api/json/v1/1/random.php'+searchInput)
    .then(res=>res.json())
    .then(data=>  {let displayMeals = []
      displayMeals = data.meals.map(meal => {return {
          id: meal.idMeal,
          area: meal.strArea,
          category: meal.strCategory,
          ingredients: `${meal.strIngredient1}, ${ meal.strIngredient2},  ${meal.strIngredient3}`,
          name: meal.strMeal,
          instruction: meal.strInstructions
        }
      })
      setMeals(displayMeals);
    })
  }
  async function filterByMainIngredient() {
    setMeals([])
    await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+searchInput)
    .then(res=>res.json())
    .then(data=>  {let displayCats = []
      displayCats = data.meals.map(category => {return {
          catId: category.idMeal,
          catPhoto: category.strMealThumb,
          catName: category.strMeal
        }
      })
      setCategories(displayCats);
    })
  }
  async function filterByCategory() {
    setMeals([])
    await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+searchInput)
    .then(res=>res.json())
    .then(data=>  {let displayCats = []
      displayCats = data.meals.map(category => {return {
          catId: category.idMeal,
          catPhoto: category.strMealThumb,
          catName: category.strMeal
        }
      })
      setCategories(displayCats);
    })
  }
  async function filterByArea() {
    setMeals([])
    await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+searchInput)
    .then(res=>res.json())
    .then(data=>  {let displayCats = []
      displayCats = data.meals.map(category => {return {
          catId: category.idMeal,
          catPhoto: category.strMealThumb,
          catName: category.strMeal
        }
      })
      setCategories(displayCats);
    })
  }
  return (
    <div className="App">
      <Header></Header>
      <input
            type="mealName"
            id="searchInput"
            onChange={searchInputHandler}
          />
      <Card className='button-control-area'>
        <Button onClick={searchByName}>Search meal by Name</Button>
        <Button onClick={searchByFirstLetter}>Search meal by first letter</Button>
        <Button onClick={lookUpById}>Look up full meal details by id</Button>
        <Button onClick={lookUpRandom}>Look up a single random meal</Button>
        <Button onClick={listAllCategories}>List all meal categories</Button>
        <Button onClick={listCatAreasIngr}>List all Categories, Area, Ingredients</Button>
        <Button onClick={filterByMainIngredient}>Filter by main Ingredients</Button>
        <Button onClick={filterByCategory}>Filter by category</Button>
        <Button onClick={filterByArea}>Filter by area</Button>
      </Card>
      {meals.length > 0 &&
        <Card>
          <MealList meals={meals}></MealList>
        </Card>
      }
      {categories.length > 0 &&
        <Card>
          <CategoryList categories={categories}></CategoryList>
          </Card>
      }
      {meals.length == 0 && categories.length == 0 &&
        <Card>
          <h1>No data to display</h1>
        </Card> 
      }

    </div>
  );
}

export default App;
