import React from 'react';
import TowerHome from '../components/img/towerhome.jpg';

const Home = () => {
    return (
        <div className='container home center-align'>
          <h2>Tokyo Tower Fun Facts!</h2>
          
        <img src={TowerHome} alt=""/>
        <p><span>Photo by <a href="https://unsplash.com/@stevendiazphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Steven Diaz</a> on <a href="https://unsplash.com/collections/80636457/tokyo-tower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto illo quaerat a dicta quidem perferendis asperiores obcaecati est voluptatem! Consequuntur dolorum veniam optio commodi aliquam id ut magni, dolorem dolore necessitatibus reprehenderit laudantium officia itaque velit, vel maiores. Dolorum nihil reiciendis architecto perspiciatis voluptas deserunt minima voluptates, deleniti ipsam.</p>
        

        </div>
    )
}

export default Home

