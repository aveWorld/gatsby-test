
import React, { useState } from 'react';

import Secure from './Secure';
import HomeSlider from './HomeSlider';
import Points from './Points';
import Scheme from './Scheme';
import articles from './article';

const Home = (props) => {
  const [articlesMain, setArticles] = useState(articles);
  return (
  <div>
    <Secure />
    {articlesMain.length > 0 && <HomeSlider articles={articlesMain} /> }
    <Scheme />
    <Points />
  </div>
  );
}

export default Home;
