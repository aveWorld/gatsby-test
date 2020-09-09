
import * as React from 'react';

const ReactSVG = ({classSVG, SVG, onClick}) => {
  return (
    <div className={classSVG} onClick={onClick}>
        <div>
            <SVG />
        </div>
    </div>
  );
}

export default ReactSVG;
