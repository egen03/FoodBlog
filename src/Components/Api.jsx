import React from 'react';
import axios from 'axios';
import Recipes from './Recipes';
import { render } from '@testing-library/react';

const BASE_URL =  "http://www.recipepuppy.com/api/"

class Api extends React.Component {
  constructor () {
    super();
    this.state = {
      title: " ",
      image: " "
    }
  }
}

async getRecipe() {
  const recipe = await axios.get ("http://www.recipepuppy.com/api/")
  const result = recipe.data.results.title
  console.log(recipeTitle);
  this.setState({
    title: inscription
  })
}

componentDidMount() {
  this.getRecipe();
}

  render(){
    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
