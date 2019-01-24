import React from 'react';

import Header from '../../components/Header';
import ExpansionPanel from './ExpansionPanel';
import styles from './styles';

import Paper from '@material-ui/core/Paper';
import Link from '../../components/Link';
const Home = () => (
  <div>
    <title> Home</title>
    <meta name='description' content='Home Page' />
    <Header />

    <Paper elevation={4} style={styles.paper} align='left'>
      <Link />
      <ExpansionPanel />
    </Paper>
  </div>
);

export default Home;
