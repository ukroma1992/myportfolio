import React from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ReactCards from './ReactCards';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          <ReactCards /> 
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>This is jQuery</h1></div>
      );
    } else if (this.state.activeTab === 2) {
      return(
        <div><h1>This is VueJS</h1></div>
      );
    } else if (this.state.activeTab === 3) {
      return(
        <div><h1>This is MongoDB</h1></div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>jQuery</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
       
      </div>
    );
  }
}

export default Projects;