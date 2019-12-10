import React, { Component } from "react";
import Card from "./Card";
import SearchList from "./SearchList";

class CardList extends Component {
  state = {
    users: [],
    searchText: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(err => {});
  }

  handleChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    const { users, searchText } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="card-list container">
        <SearchList handleChange={this.handleChange}></SearchList>
        <ul>
          <Card users={filteredUsers}></Card>
        </ul>
      </div>
    );
  }
}

export default CardList;
