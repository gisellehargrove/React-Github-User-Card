import React from 'react';
import './UserCard.scss';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';



class UserCard extends React.Component {

  constructor() {
    super();


    this.state = {
      userData: {},
      fetchProfile: () => {
        fetch('https://api.github.com/users/gisellehargrove')
          .then(response => {
            return response.json()
        })
          .then(response => {
            this.setState({userData: response})
            console.log(this.state.userData);
          });
      }
    };
  }

  componentDidMount() {
    this.state.fetchProfile();
  }

  render() {
    return (
      <Card className="user">
        <CardHeader
          className="username"
          avatar={
            <Avatar className="avatar">G</Avatar>
          }
          title={this.state.userData.name}
          subheader={'@' + this.state.userData.login}>
        </CardHeader>

        <CardMedia className="media" image={`${this.state.userData.avatar_url}`} />
      </Card>
    );
  }
}

export default UserCard;
