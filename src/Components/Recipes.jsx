import React from 'react';

const Recipes = () => {
    return(
        // style="width: 18rem;
        <div className="cardContainer">
        {/* class="row row-cols-1 row-cols-sm-2" */}
            <div class="card col mb-4">

                <div className="foodImage">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/foodblog/foodblog/src/Images/thai.jpeg")} class="card-img-top" alt="Thai Food"  />
                {/* height="500px" width="700px" */}
                </div>

            <div class="card-body">
            <h5 class="card-title">Thai Food</h5>
            <p class="card-text">Thai cooking places emphasis on lightly prepared dishes with strong aromatic components and a spicy edge. Thai cooking is about the juggling of disparate elements to create a harmonious finish. Traditional Thai cuisine loosely falls into four categories: tom (boiled dishes), yam (spicy salads), tam (pounded foods), and gaeng (curries). Deep-fries, stir-fries, and steamed dishes derive from Chinese cooking.</p>
            <a href="#" class="btn btn-primary">Thai Recipes</a>
            </div>

            </div>


            <div class="card col mb-4">

                <div className="foodImage">
                <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/foodblog/foodblog/src/Images/italian.jpeg")} class="card-img-top" alt="Thai Food" height="500px" width="700px" />
                </div>

            <div class="card-body">
            <h5 class="card-title">Italian Food</h5>
            <p class="card-text">Italian cuisine is known for its regional diversity, especially between the north and the south of the Italian peninsula. It offers an abundance of taste, and is one of the most popular and copied in the world. Italian cuisine is generally characterized by its simplicity, with many dishes having only two to four main ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation</p>
            <a href="#" class="btn btn-primary">Italian Recipes</a>
            </div>

            </div>

        </div>
    )
}

export default Recipes;