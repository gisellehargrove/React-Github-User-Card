import React from 'react';

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
            console.log(this.state);
          })
      }
    };
  }

  componentDidMount() {
    this.state.fetchProfile();
  }

  render() {
    return (
      <div>UserCard Component</div>
    );
  }
}

export default UserCard;
