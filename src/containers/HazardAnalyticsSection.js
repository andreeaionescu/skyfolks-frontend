import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { fetchHazardsActionCreator, fetchHazardAnalyticsByIdActionCreator } from '../actions/hazardAnalysis.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  

function HazardAnalyticsSection() {
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" alignItems="flex-end">
            <Grid item xs>
                <img className={classes.img} alt="complex" src="src/modis_hazard_load.png" />
            </Grid>
            <Grid item xs>
                
            </Grid>
            <Grid item xs>

            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return { analytics: state.analytics, predict: state.predict };
}

const mapDispatchToProps = dispatch => ({
    handleAllHazards: () => dispatch(fetchHazardsActionCreator()),
    handleHazardAnalyticsById: id => dispatch(fetchHazardAnalyticsByIdActionCreator(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HazardAnalyticsSection)