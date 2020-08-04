import React from 'react';
import Title from './Title';
import Api from './Api';
import Api2 from './Api2';
import Api3 from './Api3';

const Recipes = () => {
    return(
        <div className="homeContainer">
        <div className="title">
                <Title title="Erica's Favorite Recipes" />
            </div>

        <div className="cardContainer">
        {/* class="row row-cols-1 row-cols-sm-2" */}
            <div class="card col mb-4">

                <div className="foodImage">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/foodblog/foodblog/src/Images/meanpasta.jpeg")} class="card-img-top" alt="Thai Food"  />
                {/* height="500px" width="700px" */}
                <Api />
                </div>

            {/* <div class="card-body">
            <h5 class="card-title">Thai Food</h5>
            <p class="card-text">Thai cooking places emphasis on lightly prepared dishes with strong aromatic components and a spicy edge. Thai cooking is about the juggling of disparate elements to create a harmonious finish. Traditional Thai cuisine loosely falls into four categories: tom (boiled dishes), yam (spicy salads), tam (pounded foods), and gaeng (curries). Deep-fries, stir-fries, and steamed dishes derive from Chinese cooking.</p>
            <a href="#" class="btn btn-primary">Thai Recipes</a>
            </div> */}

            </div>


            <div class="card col mb-4">

                <div className="foodImage">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/foodblog/foodblog/src/Images/porkchops.jpeg")} class="card-img-top" alt="Italian Food" height="500px" width="700px" />
                <Api2 />
                </div>

            {/* <div class="card-body">
            <h5 class="card-title">Italian Food</h5>
            <p class="card-text">Italian cuisine is known for its regional diversity, especially between the north and the south of the Italian peninsula. It offers an abundance of taste, and is one of the most popular and copied in the world. Italian cuisine is generally characterized by its simplicity, with many dishes having only two to four main ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation</p>
            <a href="#" class="btn btn-primary">Italian Recipes</a>
            </div> */}

            </div>

            <div class="card col mb-4">

                <div className="foodImage">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/foodblog/foodblog/src/Images/chickensalad.jpeg")} class="card-img-top" alt="French Food" height="500px" width="700px" />
                <Api3 />
                </div>

            {/* <div class="card-body">
            <h5 class="card-title">French Food</h5>
            <p class="card-text">There are many dishes that are considered part of French national cuisine today. A meal often consists of three courses, hors d'œuvre or entrée (introductory course, sometimes soup), plat principal (main course), fromage (cheese course) or dessert, sometimes with a salad offered before the cheese or dessert. French regional cuisine is characterized by its extreme diversity and style. Traditionally, each region of France has its own distinctive cuisine.</p>
            <a href="#" class="btn btn-primary">French Recipes</a>
            </div> */}

           
            
            </div>

        </div>
        </div>
    )
}

export default Recipes;