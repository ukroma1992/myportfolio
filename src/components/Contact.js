import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Roman Drach</h2>
            <img 
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a JavaScript developer working for Comatch GmbH, in Berlin, Germany. Since the age of 13, I have delved into numerous programming languages. My interest in designing and developing engaging user interfaces is what drove me to specialise in Frontend Development.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fas fa-phone-square" style={{fontSize: '35px', paddingRight: '5rem'}}></i>
                    <a href="tel:0988637651">(098)86-37-651</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fas fa-envelope-square" style={{fontSize: '35px', paddingRight: '5rem'}}></i>
                    <a href="mailto:ukroma1992@gmail.com">ukroma1992@gmail.com</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fab fa-telegram" style={{fontSize: '35px', paddingRight: '5rem'}}></i>
                    <a href="https://t.me/ukroma1992">ukroma1992</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fab fa-skype" style={{fontSize: '35px', paddingRight: '5rem'}}></i>
                    <a href="skype:ukroma2013?chat">ukroma2013</a>
                  </ListItemContent>
                </ListItem>
                
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;