import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    const regexEmail = /\S+[@]\w+[.]\w+/gm;
    const minPasswordLength = 6;
    const validationBtn = regexEmail.test(email) && password.length >= minPasswordLength;

    const form = (
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="E-mail"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ !validationBtn }
        >
          Entrar
        </button>
      </form>
    );

    return (
      <div>
        Login
        { form }
      </div>
    );
  }
}

export default connect()(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
