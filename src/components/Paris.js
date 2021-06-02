import React from 'react';
import TowerParis from '../components/img/towerparis.jpg';

const Paris = () => {
    return (
       
        <div className='container'>
        <h2>The design was inspired by the Eiffel Tower!</h2>

        <div className="homediv">

        <div className="imghomediv">

        <img src={TowerParis} alt="tokyo tower" className="towerparisimg"/>

       </div>

       <div className="textdiv">

        <p className="text">The design of Tokyo Tower is based on the Eiffel Tower in Paris, it is however 9 meters taller than the Eiffel Tower because of its longer spire.
The Eiffel Tower is, however, heavier, it weighs 7,300 tons while the Tokyo Tower weighs 4,000 tons.
Tokyo Tower did not fully follow the concept of the Eiffel Tower. The Eiffel Tower has a reddish-brown colour while the Tokyo Tower has a white and bright orange colour.
</p>

</div>
        </div>
        </div>

       
    )
}

export default Paris