import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MainActions from "../actions/actioncreators/main";
import logo from '../images/logo.png';
class Home extends Component {
  constructor(props) {
    super(props);
    const saveUser = props.saveUser;
    
    this.state = {
      username: '',
      password: '',
      userdata: [],
    };
  }
  componentDidMount() {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    console.log(userdata)
    this.setState({
      userdata: userdata
    })
  }
  handleChange = (event) => {
    const input = event.target;
    // console.log(input.value)
    if (input.type === 'text') {
      this.setState({ username: input.value });
    }
    else {
      this.setState({ password: input.value });
    }
  };
  gotomain = () => {
    if (this.state.username === '' || this.state.password === '') { alert('Please Input user data!'); return }
    if ((this.state.username === this.state.userdata.username) && (this.state.password === this.state.userdata.password)) {
      this.props.MainActions.login(this.state.userdata);
      this.props.history.push('../Pages/Dashboard');
      this.setState({
        username:'',
        password:''
      })
    }
    else {
      alert('Wrong User and password');
      return;
    }
  }
  render() {
    return (
      <div className="loginArea">
        <div className="loginForm">
          <a href="#" className="siteLogo"><img src={logo} className="App-logo" alt="logo" /></a>
          <h1>Login</h1>
          <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <button
            style={{ width: 100, height: 50, color: 'black', fontSize: 20, }}
            onClick={() => {
              this.gotomain()
            }}
            type="button"
          >
            LOG IN
          </button>
          <button
            style={{ width: 100, height: 50, color: 'black', fontSize: 20, }}
            onClick={() => {
              this.props.history.push('../Pages/SignUp');
            }}
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    )
  }

}
const mapStateToProps = state => {
  return {
    saveUser: state.mainReducer
  };
};
export default connect(
  mapStateToProps,
  (dispatch) => ({
    MainActions: bindActionCreators(MainActions, dispatch)
  })
)(Home);