import React from 'react';
import axios from 'axios';
// import Recipes from './Recipes';
// import { render } from '@testing-library/react';

const BASE_URL =  "http://www.recipepuppy.com/api/."

class Api extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: " ",
      picture: " ",
      src: " "
    }
  }


async getRecipe() {
  const recipe =  await axios.get("http://www.recipepuppy.com/api/.")
  const result = recipe.data.results[9].title
  const img = recipe.data.results[9].ingredients
  const link = recipe.data.results[9].href
  console.log(result);
  this.setState({
    name: result,
    picture: img,
    src: link
  })
}


// async recipeImg() {
//   const image =  await axios.get("http://www.recipepuppy.com/api/")
//   const result = recipe.data.results.thumbnail
//   console.log(pic);
//   this.setState({
//     title: result
//   })
// }


  componentDidMount() {
  this.getRecipe();
  // this.recipeImg();
}

 render() {
    return (
      <div>
       <p className="card-title">Title of recipe:</p>
       <p className="card-text">{this.state.name}</p>
       <p className="card-title">Ingredients:</p>
       <p className="card-text">{this.state.picture}</p>
       <p className="card-title">Directions:</p>
       <p className="card-text">{this.state.src}</p>
       

      

      </div>
    );
    }
}   

export default Api;