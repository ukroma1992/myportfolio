import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../img/avatar.jpg'

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Avatar}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front End Web Developer</h1>
              <hr/>
              <p> HTML/CSS | Bootstrap | Javascript | React | MongoDB </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/roman-drach-917996131/" rel="noopener noreferrer" target="_blank"> 
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/ukroma1992" rel="noopener noreferrer" target="_blank"> 
                  <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.freecodecamp.org/ukroma1992" rel="noopener noreferrer" target="_blank"> 
                  <i className="fab fa-free-code-camp"></i>
                </a>
                <a href="mailto:ukroma1992@gmail.com"> 
                  <i className="fas fa-envelope-square"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid> 
      </div>
    );
  }
}

export default LandingPage;