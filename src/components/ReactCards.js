import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ReactCards extends React.Component {
  render() {
    return(
      <React.Fragment>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#0083bd', height: '176px', background: 'url(https://ak8.picdn.net/shutterstock/videos/22276048/thumb/10.jpg) center / cover'}} >React Chat</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Codepen</Button>
            <Button colored>LiveDemo</Button>            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#0083bd', height: '176px', background: 'url(https://static.vecteezy.com/system/resources/previews/000/151/265/non_2x/cartoon-map-vector.png) center / cover'}} >React Chat</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Codepen</Button>
            <Button colored>LiveDemo</Button>            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#0083bd', height: '176px', background: 'url(http://cdn1.theodysseyonline.com/files/2016/02/22/635917038311632174-371695616_best_Time_-_good.305184206_std.jpg) center / cover'}} >Timesend</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Codepen</Button>
            <Button colored>LiveDemo</Button>            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </React.Fragment>
    );
  }
}

export default ReactCards;