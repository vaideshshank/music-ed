import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Master from './EventsList/Master';
import All from './EventsList/All';
import Conferences from './EventsList/Conferences';
import Festivals from './EventsList/Festivals';
import Open from './EventsList/Open';
import Seminars from './EventsList/Seminars';
import Workshops from './EventsList/Workshops';
import '../../stylesheets/Events/MultipleEvents.css';
var {extended,master,all} =require('../../data/events.json');


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '85%',
    backgroundColor: 'rgb(255,255,255)',
    margin:'0 auto',
    boxShadow:'none'
  },
  nav:{
    boxShadow:'none',
    backgroundColor:'white',
    textAlign:'center'
  },
  singleTab:{
    color:'#9b9b9b',
    textTransform:'capitalize',
    fontFamily:'Heebo-Medium',
    textAlign:'left',
    width:'auto',
    marginRight:'-20px'
  },
  inkBarStyle:{
    color:'#101010',
    borderColor:'yellow'
  },
  indicator: {
    borderColor: 'red',
    padding:'0',
    margin:'0'
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.nav}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto" classes={{indicator:classes.indicator}}
          >
            <Tab label="All" className={classes.singleTab}/>
            <Tab label="Master Class" className={classes.singleTab}/>
            <Tab label="Open Days"  className={classes.singleTab}/>
            <Tab label="Seminars"  className={classes.singleTab}/>
            <Tab label="Workshops"  className={classes.singleTab}/>
            <Tab label="Festivals"  className={classes.singleTab}/>
            <Tab label="Conferences"  className={classes.singleTab}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
            <All data={master}/>
        </TabContainer>}
        {value === 1 && <TabContainer>
            <Master data={all}/>
        </TabContainer>}
        {value === 2 && <TabContainer>
            <Open data={master}/>
        </TabContainer>}
        {value === 3 && <TabContainer>
            <Seminars data={all}/>
        </TabContainer>}
        {value === 4 && <TabContainer>
            <Workshops data={master}/>
        </TabContainer>}
        {value === 5 && <TabContainer>
            <Festivals data={all}/>
        </TabContainer>}
        {value === 6 && <TabContainer>
            <Conferences data={master}/>
        </TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);