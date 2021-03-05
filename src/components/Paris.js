import React from 'react';
import TowerParis from '../components/img/towerparis.jpg';

const Paris = () => {
    return (
       
        <div className='container paris center-align'>
        <h2>The design of the Tower was inspired by that of Eiffel Tower in Paris!</h2>

        <img src={TowerParis} alt=""/>

        <p><span>Photo by <a href="https://unsplash.com/@jezael?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jezael Melgoza</a> on <a href="https://unsplash.com/collections/80636457/tokyo-tower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>

        <p>The design of Tokyo Tower is based on the Eiffel Tower in Paris, it is however 9 meters taller than the Eiffel Tower because of its longer spire.
The Eiffel Tower is, however, heavier, it weighs 7,300 tons while the Tokyo Tower weighs 4,000 tons.
Tokyo Tower did not fully follow the concept of the Eiffel Tower. The Eiffel Tower has a reddish-brown colour while the Tokyo Tower has a white and bright orange colour.
</p>
        
        </div>

       
    )
}

export default Paris