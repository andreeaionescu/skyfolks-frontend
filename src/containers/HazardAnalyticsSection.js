import React from 'react';
import { connect } from 'react-redux';
import { fetchHazardsActionCreator, fetchHazardAnalyticsByIdActionCreator } from '../actions/hazardAnalysis.js';

function HazardAnalyticsSection() {

}

const mapStateToProps = (state) => {
    return { analytics: state.analytics, predict: state.predict };
}

const mapDispatchToProps = dispatch => ({
    handleAllHazards: () => dispatch(fetchHazardsActionCreator()),
    handleHazardAnalyticsById: id => dispatch(fetchHazardAnalyticsByIdActionCreator(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HazardAnalyticsSection)