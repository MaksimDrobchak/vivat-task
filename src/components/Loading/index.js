import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

export default () => (
  <CircularProgress
    disableShrink
    style={{
      margin: 50,
      animationDuration: '900ms',
      width: 100,
      height: 100,
    }}
  />
);
