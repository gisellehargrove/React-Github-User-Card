import React from 'react';

class UserCard extends React.Component {
  constructor() {
    super();

    this.state = {
      fetchProfile: () => {
        fetch('https://api.github.com/users/gisellehargrove')
          .then(response => {
            return response.json()
        })
          .then(response => {
            console.log(response);
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
