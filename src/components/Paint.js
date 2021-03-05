import React from 'react';
import TowerPaint from '../components/img/towerpaint.jpg';

const Paint = () => {
    return (
        <div className='container paint center-align'>

        <h2>The Tokyo Tower gets painted every five years!</h2>

        <img src={TowerPaint} alt="tokyo tower near a wall"/>

        <p><span>Photo by <a href="https://unsplash.com/@yoavaziz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Yoav Aziz</a> on <a href="https://unsplash.com/collections/80636457/tokyo-tower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>

        <p>The Tokyo Tower gets a fresh coat of paint every five years. It takes a whole year to paint the entire tower.
28,000 litres of paint are used to in the paint job every year. Two colours are used here, white and international orange.
These two colours are the recommended ones that comply with air safety regulations.
In 1987, the Tower had light bulbs on the corner contours that extended from the base of the antenna.
Later that year, during its 30th anniversary a lighting designer was commissioned to revamp the Tokyo Tower. This was done to establish the tower as a tourist attraction.
He installed 176 floodlights in and around the Tower’s Frame. This illuminates the entire tower from dusk to around midnight.
</p>
        

        </div>
    )
}

export default Paint