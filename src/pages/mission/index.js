
import * as React from 'react';

/** Components * */
import OurMission from './OurMission';
import SameTimeMarket from './SameTimeMarket';
import Layout from '../../components/Layout'


const Mission = (props) => (
  <Layout>
    <OurMission />
    <SameTimeMarket />
  </Layout>
);

export default Mission;
