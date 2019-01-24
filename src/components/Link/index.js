import React from 'react';
import githubIcon from './github.png';

export default ({
  href = 'https://github.com/MaximDrobchak/vivat-task',
  src = githubIcon,
}) => (
  <a href={href}>
    Link to repository
    {src && <img src={src} alt='' style={{ height: 25 }} />}
  </a>
);
