import React from 'react';
import Title from './Title';
import Info from './Info';


// const Home = () => {
//     return[
//        <div className="title">
//             <Title title="Eating with Erica" />
//             <Info info=" info text" />
//         </div>  
       
//     ];
// }

export class Home extends React.Component {
    render() {
        return (
            <div className="homeContainer">
            <div className="title">
                <Title title="Eating with Erica" />
            </div>
            <div>
                <Info info="Cooking as a family or with friends and loved ones brings us together because we are able to share our culture and heritage through food and give each other nourishment. Food helps us find our way closer to each other, as we gather together to prepare a meal and sit down for dinner. In these moments of uncertainty, it is the familiar feeling food brings that offers the most comfort. With food we make friends, court lovers, and count our blessings. The sharing of food has always been part of the human story. "/>
            </div>
            </div>
        )
    }
}

export default Home;