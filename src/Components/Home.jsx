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
            <div className="title">
                <Title title="Eating with Erica" />
            </div>
        )
    }
}

export default Home;