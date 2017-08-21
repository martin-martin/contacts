import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      },
      {
        "id": "martin",
        "name": "Martin Breuss",
        "email": "martin-not@reacttraining.com",
        "avatarURL": "https://avatars0.githubusercontent.com/u/12371494?v=4&u=ade0bf6c16ed2313397019c7a5a9d0d8eedff245&s=400"
      }
    ]
  }

  render() {
    return (
      <div>
        Life is good.
        <ListContacts contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
