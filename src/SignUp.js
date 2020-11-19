import React, { Component } from "react";
import ValidationError from "./ValidationError";
import AuthApiService from './services/auth-api-service';
import TokenService from './services/token-service';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: {
        value: "",
        touched: false
      },
      password: {
        value: "",
        touched: false
      },
      repeatPassword: {
        value: "",
        touched: false
      },
      firstName: {
        value: "",
        touched: false
      },
      lastName: {
        value: "",
        touched: false
      }
    };
  }

  updateUserName(userName) {
    this.setState({ userName: { value: userName, touched: true } });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, touched: true }
    });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({
      repeatPassword: {
        value: repeatPassword,
        touched: true
      }
    });
  }

  updateFirstName(firstName) {
    this.setState({ firstName: { value: firstName, touched: true } });
  }

  updateLastName(lastName) {
    this.setState({ lastName: { value: lastName, touched: true } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { userName, password, repeatPassword, firstName, lastName } = this.state;

    console.log("Name: ", userName.value);
    console.log("Password: ", password.value);
    console.log("Repeat Password: ", repeatPassword.value);
    console.log("First Name: ", firstName.value)
    console.log("Last Name: ", lastName.value)
    AuthApiService.postUser({
      user_name: userName.value,
      password: password.value,
      first_name: firstName.value,
      last_name: lastName.value
  })

      .then(response => {
          console.log('user:', response)
          userName.value = ''
          password.value = ''
          repeatPassword.value = ''
          firstName.value = ''
          lastName.value = ''
          TokenService.saveAuthToken(response.authToken)
          TokenService.saveUserId(response.id)
          // this.props.history.push('/landing');
          window.location = '/'
      })
      .catch(res => {
          this.setState({ error: res.error })
      })
  }

  validateUserName() {
    const userName = this.state.userName.value.trim();
    if (userName.length === 0) {
      return "Username is required";
    } else if (userName.length < 3) {
      return "Username must be at least 3 characters long";
    }
  }

  validateFirstName() {
    const firstName = this.state.firstName.value.trim();
    if (firstName.length === 0) {
      return "Please enter your first name."
    }
  }

  validateLastName() {
    const lastName = this.state.lastName.value.trim();
    if (lastName.length === 0) {
      return "Please enter your last name."
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  }

  render() {
    const userNameError = this.validateUserName();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();
    const firstNameError = this.validateFirstName();
    const lastNameError = this.validateLastName();

    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">First Name *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            onChange={e => this.updateFirstName(e.target.value)}
          />
          {this.state.firstName.touched && <ValidationError message={firstNameError} />}
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            onChange={e => this.updateLastName(e.target.value)}
          />
          {this.state.lastName.touched && <ValidationError message={lastNameError} />}
        </div>
        <div className="form-group">
          <label htmlFor="name">Username *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            onChange={e => this.updateUserName(e.target.value)}
          />
          {this.state.userName.touched && <ValidationError message={userNameError} />}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
            onChange={e => this.updatePassword(e.target.value)}
          />
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
          {this.state.password.touched && (
            <ValidationError message={passwordError} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
            onChange={e => this.updateRepeatPassword(e.target.value)}
          />
          {this.state.repeatPassword.touched && (
            <ValidationError message={repeatPasswordError} />
          )}
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button
            type="submit"
            className="registration__button"
            disabled={
              this.validateFirstName() ||
              this.validateLastName() ||
              this.validateUserName() ||
              this.validatePassword() ||
              this.validateRepeatPassword()
            }
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}
export default SignUp;