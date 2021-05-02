import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import Data from '../Data';

interface RouteParams {
  subId0: string;
  subId1: string;
  subId2: string;
}

const GuideSubrouteSubroute: FunctionComponent = () => {
  const { subId0, subId1, subId2 } = useParams<RouteParams>();

  // console.log(subId0, subId1);

  const topic = Data.find(({ id }) => id === subId0);

  const subTopic = topic?.subroute?.find(({ id }) => id === subId1);

  if (subTopic == null) return <h2>Welcome SubrouteSubroute</h2>;

  const subSubTopic = subTopic?.subroute?.find(({ id }) => id === subId2);

  if (subSubTopic == null) return <h2>Welcome GuideSubrouteSubroute</h2>;

  return (
    <div className="guideSubroute">
      <h2>{subSubTopic.name}</h2>
    </div>
  );
};

export default GuideSubrouteSubroute;
