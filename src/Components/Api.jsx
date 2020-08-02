import React from 'react';
import axios from 'axios';
import Recipes from './Recipes';

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
}
// recipe.data.results.title

