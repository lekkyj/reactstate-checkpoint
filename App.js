import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jane Doe",
        bio: "A passionate software engineer who loves building interactive web applications.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Full-Stack Developer",
      },
      shows: false,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows } = this.state;

    return (
      <div className="App">
        <h1>Person Profile
