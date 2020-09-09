
import React, { useState } from 'react';

import Secure from './Secure';
import HomeSlider from './HomeSlider';
import Points from './Points';
import Scheme from './Scheme';


const Home = ({ data }) => {
  console.log(data)
  const [articlesMain, setArticles] = useState(data.allMarkdownRemark.edges);
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
