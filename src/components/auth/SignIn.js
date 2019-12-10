import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card grey darken-3">
              <form
                onSubmit={this.handleSubmit}
                className="white-text card-content"
              >
                <h5 className="center">Sign In</h5>
                <div className="input-field">
                  <input
                    className="white-text"
                    placeholder="e-mail"
                    type="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <input
                    className="white-text"
                    placeholder="password"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
