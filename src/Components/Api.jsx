import React from 'react';
import axios from 'axios';

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

// recipe.data.results.title

