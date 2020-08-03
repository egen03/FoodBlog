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
    }
  }


async getRecipe() {
  const recipe =  await axios.get("http://www.recipepuppy.com/api/.")
  const result = recipe.data.results[6].title
  const img = recipe.data.results[6].thumbnail
  console.log(result);
  this.setState({
    name: result,
    picture: img
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
       <h3>Title of recipe:</h3>
       <h2>{this.state.name}</h2>
       <h2>{this.state.picture}</h2>
       

       <form>
         <input type="text" />
         <button type="submit">Search</button>
       </form>

      </div>
    );
    }
}   

export default Api;