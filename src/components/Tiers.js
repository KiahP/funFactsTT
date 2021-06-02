import React from 'react';
import TowerTier from '../components/img/towertier.jpg';

const Tiers = () => {
    return (
        <div className='container'>
        <h2>The Tower is divided into three tiers!</h2>

        <div className="homediv">


        <div className="imghomediv">
        <img src={TowerTier} alt="tokyo tower" className="towertiersimg"/>
        </div>

        <div className="textdiv">

       

        <p className="text">Tokyo Tower is divided into three separate sections. At the base of the Tower is the Foot Town which houses cafes, restaurants and souvenir shops.
There is also One-Piece Tower, which is a theme park based on the famous manga and anime.
The other section of the Tower is the main Observatory that is located 150 meters up. This observation area offers memorable views of the city.
There is a look-down window that may be too much for those that are afraid of heights.
For the best views of the city, climb to the Special Observatory area that is 250 metres high.
</p>
        </div>

      </div>
        </div>
    )
}

export default Tiers