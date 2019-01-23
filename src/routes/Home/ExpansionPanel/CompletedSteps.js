import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';

export default ({ onAddResetStep }) => (
  <Paper square elevation={0}>
    <Typography variant='h5'>
      All steps completed - you&apos;re finished
    </Typography>
    <Button onClick={onAddResetStep}>Reset</Button>
  </Paper>
);
