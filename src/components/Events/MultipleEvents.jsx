import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import All from './EventsList/All';

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
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
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
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="All" />
            <Tab label="Master Class" />
            <Tab label="Open Days" />
            <Tab label="Seminars" />
            <Tab label="Workshops" />
            <Tab label="Festivals" />
            <Tab label="Conferences" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
           <div>
               <h2>ITMETC NE</h2>
           </div>
        </TabContainer>}
        {value === 1 && <TabContainer>
            <All/>
        </TabContainer>}
        {value === 2 && <TabContainer>
            Item Three
        </TabContainer>}
        {value === 3 && <TabContainer>
            Item Four
        </TabContainer>}
        {value === 4 && <TabContainer>
            Item Five
        </TabContainer>}
        {value === 5 && <TabContainer>
            Item Six
        </TabContainer>}
        {value === 6 && <TabContainer>
            Item Seven
        </TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);