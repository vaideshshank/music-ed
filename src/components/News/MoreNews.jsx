import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../../stylesheets/News/MoreNews.css';
import All from './MoreNews/All';
var {all} =require('../../data/news.json');


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
    width: '95%',
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
            <Tab label="Awards and Competitions" className={classes.singleTab}/>
            <Tab label="Flute"  className={classes.singleTab}/>
            <Tab label="People"  className={classes.singleTab}/>
            <Tab label="Online Learning"  className={classes.singleTab}/>
            <Tab label="Performing and Composing"  className={classes.singleTab}/>
            <Tab label="Music and Industry"  className={classes.singleTab}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
            <All data={all}/>
        </TabContainer>}
        {value === 1 && <TabContainer>
            cejlk;re
        </TabContainer>}
        {value === 2 && <TabContainer>
            pokrecre
        </TabContainer>}
        {value === 3 && <TabContainer>
            x[pkoe;lw]
        </TabContainer>}
        {value === 4 && <TabContainer>
            mxlekwekw
        </TabContainer>}
        {value === 5 && <TabContainer>
            poxkewm,xwe
        </TabContainer>}
        {value === 6 && <TabContainer>
            owxikepwe
        </TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);