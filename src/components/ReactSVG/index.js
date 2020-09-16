
import * as React from 'react';

const ReactSVG = ({classSVG, SVG, onClick}) => {
  /* eslint-disable */
  return (
    <div className={classSVG} onClick={onClick} >
        <div>
            <SVG />
        </div>
    </div>
  );
}

export default ReactSVG;
