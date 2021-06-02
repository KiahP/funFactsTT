import React from 'react';
import TowerHome from '../components/img/towerhome.jpg';

const Home = () => {
    return (
        <div className='container'>
          <h2>Tokyo Tower Fun Facts!</h2>

        <div className="homediv">

        <div className="imghomediv">
        <img className="towerhomeimg" src={TowerHome} alt=""/>
        </div>

        <div className="textdiv">

        <p className="text">The red and orange Tokyo Tower stands like a beacon in the city skyline.  In a cityscape of very tall skyscrapers, the colours and shape make it instantly recognisable.  Similar to its French counterpart, the Eiffel Tower, Tokyo Tower is a beloved symbol of the city. Here are some cool facts about Tokyo Tower.</p>
        </div>
        </div>
        </div>
    )
}

export default Home

