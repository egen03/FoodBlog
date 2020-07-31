import React from 'react';

const Recipes = () => {
    return(
        // style="width: 18rem;
        <div className="cardContainer">
        
            <div class="card">

                <div className="foodImage">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/foodblog/foodblog/src/Images/thai.jpeg")} class="card-img-top" alt="Thai Food" height="500px" width="700px" />
                </div>

            <div class="card-body">
            <h5 class="card-title">Thai Food</h5>
            <p class="card-text">Thai cooking places emphasis on lightly prepared dishes with strong aromatic components and a spicy edge. Thai cooking is about the juggling of disparate elements to create a harmonious finish.</p>
            <a href="#" class="btn btn-primary">Thai Recipes</a>
            </div>

            </div>

        </div>
    )
}

export default Recipes;