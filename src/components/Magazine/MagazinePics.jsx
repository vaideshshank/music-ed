import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../../stylesheets/Events/MultipleEvents.css';
import All from './MagazinePics/All';
import axios from 'axios';

var {all}=require('../../data/magazine.json');




//Similar CSS of the Tabs 


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
    all:[]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount(){
    axios.get(process.env.REACT_APP_MUSICED_BACKEND+"/api/articles?kind=news")
    .then(({data})=>{
        //console.log(data.data);
        this.setState(prevState=>({
            ...this.state,
            all:[...data.data]
        }),()=>{
            //console.log(this.state.imageContent);
        })
    })
  }
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
            <Tab label="Features" className={classes.singleTab}/>
            <Tab label="Interviews"  className={classes.singleTab}/>
            <Tab label="Opinions"  className={classes.singleTab}/>
            <Tab label="Videos"  className={classes.singleTab}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
            <All data={this.state.all}/>
        </TabContainer>}
        {value === 1 && <TabContainer>
            e.x,er
        </TabContainer>}
        {value === 2 && <TabContainer>
            prceixrke
        </TabContainer>}
        {value === 3 && <TabContainer>
            pxoke;wmrw
        </TabContainer>}
        {value === 4 && <TabContainer>
            xwrokworlkw
        </TabContainer>}
        {value === 5 && <TabContainer>
            pxoripokw
        </TabContainer>}
        {value === 6 && <TabContainer>
        xw;lewxew;''        
        </TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);