import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    const expenses = 0;

    return (
      <div>
        <div>
          <h3 data-testid="email-field">
            { userEmail }
          </h3>
        </div>
        <div>
          <h3 data-testid="total-field">
            { expenses }
          </h3>
        </div>
        <div>
          <h6 data-testid="header-currency-field">
            BRL
          </h6>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
