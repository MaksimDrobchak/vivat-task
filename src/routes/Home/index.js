import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/Header';
import ExpansionPanel from './ExpansionPanel';
import styles from './styles';

import Paper from '@material-ui/core/Paper';

const Home = ({ loading }) => (
  <div>
    <title> Home</title>
    <meta name='description' content='Home Page' />
    <Header />
    <Paper elevation={4} style={styles.paper} align='left'>
      {
        loading ? <p>Loading...</p> :
        <ExpansionPanel />}
    </Paper>
  </div>
);
const mapStateToProps = state => ({
  loading: state.sendDataState.loading,
});
export default connect(mapStateToProps)(Home);
